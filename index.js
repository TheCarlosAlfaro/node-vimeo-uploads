require('dotenv').config();
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
console.log(demo_date);

const files_path = '/Users/devbysalas/Dropbox/DEMO day/Videos/';

const demo_day_video_description = `
Filmed at Demo Day Las Vegas on ${demo_date}. More at https://developers.vegas

Thanks to our sponsors:

Innevation
innevation.com/

Vehicle History
vehiclehistory.com/

CHSI Technologies
chsiconnections.com/

Dot Vegas
the.vegas/
`;

const all_videos = fs.readdirSync(files_path);

all_videos.sort(function(a, b) {
  return (
    fs.statSync(files_path + a).mtime.getTime() -
    fs.statSync(files_path + b).mtime.getTime()
  );
});

function upload_videos(videos_dir, all_videos, video_info) {
  all_videos.forEach((video, index) => {
    // console.log(video_info[index]['member']['first_name']);

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
        console.log('Your video URI is: ' + uri);
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

// upload_videos(files_path, all_videos, presenter_list);
