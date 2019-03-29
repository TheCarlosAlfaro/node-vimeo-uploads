require("dotenv").config();
const fs = require("fs");
const Vimeo = require("vimeo").Vimeo;
const vimeo_account = new Vimeo(
  process.env.VIMEO_CLIENT_ID,
  process.env.VIMEO_CLIENT_SECRET,
  process.env.VIMEO_ACCESS_TOKEN
);

const files_path = "/Users/devbysalas/Documents/DEMO day/Videos/";

const demo_day_video_description = `
Check out Las Vegas Developers at:
http://developers.vegas/

Thanks to our sponsors:

Innevation
https://innevation.com/

Vehicle History
http://vehiclehistory.com/

CHSI Technologies
https://chsiconnections.com/

Dot Vegas
http://the.vegas/
`;

const demo_date = new Date().toISOString().slice(0, 10);

const video_info = {
  date: demo_date,
  title: "Demo Day",
  description: demo_day_video_description
};

const presenters_names = [
  "Mike Zetlow",
  "Carlos Alfaro",
  "Juan Perez",
  "Erick DeLeon",
  "Joe Smiths"
];

const all_videos = fs.readdirSync(files_path);

all_videos.sort(function(a, b) {
  return (
    fs.statSync(files_path + a).mtime.getTime() -
    fs.statSync(files_path + b).mtime.getTime()
  );
});

function upload_videos(videos_dir, all_videos, video_info) {
  all_videos.forEach((video, index) => {
    let file_name = `${videos_dir}${video}`;
    vimeo_account.upload(
      file_name,
      {
        name: `${video_info.date} - ${video_info.title} - ${
          presenters_names[index]
        }`,
        description: `${video_info.description}`
      },
      function(uri) {
        console.log("Your video URI is: " + uri);
      },
      function(bytes_uploaded, bytes_total) {
        var percentage = ((bytes_uploaded / bytes_total) * 100).toFixed(2);
        console.log(bytes_uploaded, bytes_total, percentage + "%");
      },
      function(error) {
        console.log("Failed because: " + error);
      }
    );
  });
}

upload_videos(files_path, all_videos, video_info);
