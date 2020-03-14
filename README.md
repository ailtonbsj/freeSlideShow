# Free Slide Show

A simple free slide show

## How to install

```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Helpers

```bash
# Convert all jpg to png
mogrify -format png *.jpg

# Convert 001.png, 002.png to mp4
ffmpeg -framerate 1/5 -i *%03d.png -c:v libx264 -r 30 -pix_fmt yuv420p out.mp4

# Convert one png to mp4
ffmpeg -loop 1 -i img.jpg -c:v libx264 -t 30 -pix_fmt yuv420p out.mp4

# Concat videos
ffmpeg-concat -t circleopen -d 750 -o output.mp4 input0.mp4 input1.mp4 input2.mp4
```