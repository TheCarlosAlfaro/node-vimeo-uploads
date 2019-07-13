// Imports API keys from .env file
require('dotenv').config();
// Imports presenters list (should get it from an API point in the future)
const presenter_list = require('./presenter_list.js');
const fs = require('fs');
const Vimeo = require('vimeo').Vimeo;
const vimeo_account = new Vimeo(
  process.env.VIMEO_CLIENT_ID,
  process.env.VIMEO_CLIENT_SECRET,
  process.env.VIMEO_ACCESS_TOKEN
);

const date_fns = require('date-fns');
const demo_date = date_fns.format(
  presenter_list[0].event.date,
  'MMMM Do, YYYY'
);

// Path to folder where videos are located.
// const files_path = '/Users/devbysalas/Dropbox/DEMO day/real-videos/';
const files_path = '/Users/devbysalas/Dropbox/DEMO day/Videos/';

const demo_day_video_description = `
    Filmed at Demo Day Las Vegas on ${demo_date}. More at https://developers.vegas
    
    Thanks to our sponsors:
    
    Innevation
    https://innevation.com/
    
    Vehicle History
    https://vehiclehistory.com/
    
    CHSI Technologies
    https://chsiconnections.com/
    
    Dot Vegas
    https://the.vegas/
    `;

// Stores all videos in files_path directory to a variable.
const all_videos = fs.readdirSync(files_path);
// Sorts videos by the time/date - puts them in order so it matches presenter_list.js
all_videos.sort(function(a, b) {
  return (
    fs.statSync(files_path + a).mtime.getTime() -
    fs.statSync(files_path + b).mtime.getTime()
  );
});

// We will push each video_obj after upload to this array
const vimeo_response = [];

// Main upload function
function upload_videos(videos_dir, all_videos, video_info) {
  all_videos.forEach((video, index) => {
    let file_name = `${videos_dir}${video}`;
    vimeo_account.upload(
      file_name,
      {
        name: `${video_info[index].member.first_name} ${
          video_info[index].member.last_name
        } - ${video_info[index].presentation.title}`,
        description: `${demo_day_video_description}`
      },
      function(uri) {
        // callback when completed
        console.log('Your video URI is: ' + uri);
        // I uncomment this request when using developers.vegas vimeo account.
        // Adds videos to a channel.
        // vimeo_account.request(
        //   {
        //     // Adds video to channel
        //     method: 'PUT',
        //     path: `/channels/1449073${uri}`
        //   },
        //   function(error, body, status_code, headers) {
        //     if (error) {
        //       console.log(error);
        //     }

        //     console.log(body);
        //   }
        // );
        vimeo_account.request(
          {
            // Gets all video info
            method: 'GET',
            path: uri
          },
          function(error, body, status_code, headers) {
            if (error) {
              console.log(error);
            }

            // we create an object per video and add properties with the response from vimeo.
            const video_obj = video_info[index];

            video_obj.presentation.video_screenshot_url =
              body.pictures.sizes[2].link;
            video_obj.presentation.video_screenshot_with_play_url =
              body.pictures.sizes[2].link_with_play_button;
            video_obj.presentation.video_url = body.link;
            video_obj.presentation.video_iframe = body.embed.html;

            vimeo_response.push(video_obj);

            // Creates a .json file when uploads are done.
            if (vimeo_response.length === presenter_list.length) {
              console.log(
                `${demo_date} presentations.json should be ready soon`
              );

              const vimeo_res_JSON = JSON.stringify(vimeo_response);
              // Creates a .json file where respond from vimeo after upload will be outputted to.
              fs.appendFileSync(
                `${demo_date} presentations.json`,
                vimeo_res_JSON
              );
            }
          }
        );
      },
      function(bytes_uploaded, bytes_total) {
        var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
        console.log(bytes_uploaded, bytes_total, percentage + '%');
      },
      function(error) {
        console.log('Failed because: ' + error);
      }
    );
  });
}

upload_videos(files_path, all_videos, presenter_list);
