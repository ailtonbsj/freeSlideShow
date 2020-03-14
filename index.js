#!/usr/bin/node

const execute = require('child_process').execSync;
const exec = input => execute(input, {
    stdio: 'inherit',
});
const execOut = input => execute(input, {
    stdio: 'inherit',
    cwd: 'output'
});

exec('if [ ! -d output ]; then mkdir output; fi');
exec('cp imgs/*.jpg output/');
execOut('mogrify -format png *.jpg');
execOut('rm -rf *.jpg');
execOut('mogrify -resize 600x400 *.png');

for(let i = 1; i <= 3; i++) {
    execOut(`if [ ! -f ${i}.mp4 ]; then
        ffmpeg -loop 1 -i ${i}.png -c:v libx264 -t 5 -pix_fmt yuv420p ${i}.mp4;
    fi`);
}

execOut('../node_modules/.bin/ffmpeg-concat '+
    '-t PolkaDotsCurtain -d 1500 -o out1.mp4 1.mp4 2.mp4');
execOut('../node_modules/.bin/ffmpeg-concat '+
    '-t SimpleZoom -d 1500 -o out2.mp4 out1.mp4 3.mp4');

execOut('ls');
//exec('rm -rf output');