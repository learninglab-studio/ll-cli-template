# mk-resource-ffmpeg-build

```
brew uninstall ffmpeg
brew tap homebrew-ffmpeg/ffmpeg
brew options homebrew-ffmpeg/ffmpeg/ffmpeg
brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-decklink
```



need first to map paths to the sdk, but how?

```
export DECKLINK_SDK_INCLUDE_DIR=/path/to/DeckLink_SDK/include
export DECKLINK_SDK_LIBRARY_DIR=/path/to/DeckLink_SDK/Mac
```

`/Users/mk/Development/_blackmagic/SDK/Mac/include`
`/Users/mk/Development/_blackmagic/SDK/Mac/include/DeckLinkAPI.h`


or

```
export DECKLINK_SDK_INCLUDE_DIR=/path/to/DeckLink_SDK/include
export DECKLINK_SDK_LIBRARY_DIR=/path/to/DeckLink_SDK/Mac
```

then

```
export DECKLINK_SDK_INCLUDE_DIR=/Users/mk/Development/_blackmagic/SDK/Mac/include
export DECKLINK_SDK_LIBRARY_DIR=/Users/mk/Development/_blackmagic/SDK/Mac
```


```
brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-decklink --with-decklink-sdk=$DECKLINK_SDK_INCLUDE_DIR,$DECKLINK_SDK_LIBRARY_DIR

```

no

or

```
export PKG_CONFIG_PATH=/Users/mk/Development/_blackmagic/SDK/Mac:/Users/mk/Development/_blackmagic/SDK/Mac/include:$PKG_CONFIG_PATH
```



```
--enable-decklink 
--extra-cflags=-I/PathToDeckLinkSDK/Mac/include 
--extra-ldflags=-L/PathToDeckLinkSDK/Mac/include
```

```

brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-decklink --extra-cflags=-I/Users/mk/Development/_blackmagic/SDK/Mac/include --extra-ldflags=-L/Users/mk/Development/_blackmagic/SDK/Mac/include
```


/Users/mk/Development/_blackmagic/SDK/Mac



`brew install --build-from-source homebrew-ffmpeg/ffmpeg/ffmpeg
`



patterns here:

https://github.com/dche/ffmpeg-decklink
https://github.com/jb-alvarado/compile-ffmpeg-osx-linux


a configure sample:
```
cd ~/ffmpeg_sources
wget https://ffmpeg.org/releases/ffmpeg-4.1.3.tar.bz2
tar -xvf ffmpeg-*.tar.bz2
cd ffmpeg-*/
PATH="$HOME/bin:$PATH" PKG_CONFIG_PATH="$HOME/ffmpeg_build/lib/pkgconfig" ./configure \
  --prefix="$HOME/ffmpeg_build" \
  --pkg-config-flags="--static" \
  --extra-cflags="-I$HOME/ffmpeg_build/include -I$HOME/ffmpeg_sources/BMD_SDK/include" \
  --extra-ldflags="-L$HOME/ffmpeg_build/lib" \
  --extra-libs="-lpthread -lm" \
  --bindir="$HOME/bin" \
  --enable-gpl \
  --enable-libass \
  --enable-libfdk-aac \
  --enable-libfreetype \
  --enable-libmp3lame \
  --enable-libopus \
  --enable-libvorbis \
  --enable-libvpx \
  --enable-libx264 \
  --enable-libx265 \
  --enable-nonfree \
  --enable-decklink
  ```    
  
```
./configure --extra-cflags=-I/Users/mk/Development/_blackmagic/SDK/Mac/include --extra-ldflags=-L/Users/mk/Development/_blackmagic/SDK/Mac/include --enable-gpl --enable-libass --enable-libfdk-aac --enable-libfreetype --enable-libopus --enable-libvorbis --enable-libvpx --enable-libx264 --enable-libx265 --enable-nonfree --enable-decklink
```


## build from source

`brew install automake fdk-aac git lame libass libtool libvorbis libvpx opus  shtool texi2html theora wget x264 x265 xvid nasm`


other indicates needed: `cmake git wget curl pkg-config nasm autoconf automake libtool autogen gnu-sed sdl2 shtool ninja-build cargo cargo-c`


sdl not there

`cd /Users/mk/Development/_ffmpeg`
`tar jxvf ffmpeg-6.0.tar.xz`

```
git clone https://git.ffmpeg.org/ffmpeg.git ffmpeg
cd ffmpeg
./configure  --prefix=/usr/local --enable-gpl --enable-nonfree --enable-libass \
--enable-libfdk-aac --enable-libfreetype --enable-libmp3lame \
--enable-libtheora --enable-libvorbis --enable-libvpx --enable-libx264 --enable-libx265 --enable-libopus --enable-libxvid --enable-decklink
make
```



## ffmpeg.rb formula

```
class Ffmpeg < Formula
  desc "Play, record, convert, and stream audio and video"
  homepage "https://ffmpeg.org/"
  version "6.0-with-options" # to distinguish from homebrew-core's ffmpeg
  license "GPL-2.0-or-later"
  revision 4
  head "https://github.com/FFmpeg/FFmpeg.git", branch: "master"

  stable do
    url "https://ffmpeg.org/releases/ffmpeg-6.0.tar.xz"
    sha256 "57be87c22d9b49c112b6d24bc67d42508660e6b718b3db89c44e47e289137082"

    # Fix for binutils, remove with `stable` block on next release
    # https://www.linuxquestions.org/questions/slackware-14/regression-on-current-with-ffmpeg-4175727691/
    patch do
      url "https://github.com/FFmpeg/FFmpeg/commit/effadce6c756247ea8bae32dc13bb3e6f464f0eb.patch?full_index=1"
      sha256 "9800c708313da78d537b61cfb750762bb8ad006ca9335b1724dbbca5669f5b24"
    end
  end

  option "with-chromaprint", "Enable the Chromaprint audio fingerprinting library"
  option "with-decklink", "Enable DeckLink support"
  option "with-fdk-aac", "Enable the Fraunhofer FDK AAC library"
  option "with-libflite", "Enable text to speech synthesis support via Flite"
  option "with-game-music-emu", "Enable Game Music Emu (GME) support"
  option "with-jack", "Enable Jack support"
  option "with-jpeg-xl", "Enable JPEG XL image format"
  option "with-libaribb24", "Enable decoding ARIB/ISDB captions"
  option "with-libmodplug", "Enable module/tracker files as inputs via libmodplug"
  option "with-libopenmpt", "Enable module/tracker files as inputs via libopenmpt"
  option "with-librist", "Enable Reliable Internet Stream Transport (RIST) support"
  option "with-librsvg", "Enable SVG files as inputs via librsvg"
  option "with-libsoxr", "Enable the soxr resample library"
  option "with-libssh", "Enable SFTP protocol via libssh"
  option "with-tesseract", "Enable the tesseract OCR engine"
  option "with-libvidstab", "Enable vid.stab support for video stabilization"
  option "with-opencore-amr", "Enable Opencore AMR NR/WB audio format"
  option "with-openh264", "Enable OpenH264 library"
  option "with-openjpeg", "Enable JPEG 2000 image format"
  option "with-openssl", "Enable SSL support"
  option "with-rav1e", "Enable AV1 encoding via librav1e"
  option "with-svt-av1", "Enable Scalable Video Technology for AV1"
  option "with-rtmpdump", "Enable RTMP dumping support"
  option "with-rubberband", "Enable rubberband library"
  option "with-two-lame", "Enable TwoLAME, an optimized MPEG Audio Layer 2 (MP2) encoder"
  option "with-webp", "Enable using libwebp to encode WEBP images"
  option "with-xvid", "Enable Xvid"
  option "with-zeromq", "Enable using libzeromq to receive cmds sent through a libzeromq client"
  option "with-zimg", "Enable z.lib zimg library"
  option "with-srt", "Enable SRT library"
  option "with-libvmaf", "Enable libvmaf scoring library"
  option "with-libxml2", "Enable libxml2 library"
  option "with-libzvbi", "Enable decoding of DVB teletext pages and DVB teletext subtitles"

  depends_on "pkg-config" => :build

  depends_on "aom"
  depends_on "dav1d"
  depends_on "fontconfig"
  depends_on "freetype"
  depends_on "frei0r"
  depends_on "lame"
  depends_on "libass"
  depends_on "libvorbis"
  depends_on "libvpx"
  depends_on "opus"
  depends_on "sdl2"
  depends_on "snappy"
  depends_on "theora"
  depends_on "x264"
  depends_on "x265"
  depends_on "xz"

  depends_on "aribb24" => :optional
  depends_on "fdk-aac" => :optional
  depends_on "game-music-emu" => :optional
  depends_on "jack" => :optional
  depends_on "jpeg-xl" => :optional
  depends_on "libbluray" => :optional
  depends_on "libbs2b" => :optional
  depends_on "libcaca" => :optional
  depends_on "libgsm" => :optional
  depends_on "libmodplug" => :optional
  depends_on "libopenmpt" => :optional
  depends_on "librist" => :optional
  depends_on "librsvg" => :optional
  depends_on "libsoxr" => :optional
  depends_on "libssh" => :optional
  depends_on "libvidstab" => :optional
  depends_on "libvmaf" => :optional
  depends_on "libxml2" => :optional
  depends_on "opencore-amr" => :optional
  depends_on "openh264" => :optional
  depends_on "openjpeg" => :optional
  depends_on "openssl@1.1" => :optional
  depends_on "rav1e" => :optional
  depends_on "rtmpdump" => :optional
  depends_on "rubberband" => :optional
  depends_on "speex" => :optional
  depends_on "srt" => :optional
  depends_on "svt-av1" => :optional
  depends_on "tesseract" => :optional
  depends_on "two-lame" => :optional
  depends_on "webp" => :optional
  depends_on "xvid" => :optional
  depends_on "zeromq" => :optional
  depends_on "zimg" => :optional

  uses_from_macos "bzip2"
  uses_from_macos "zlib"

  on_linux do
    depends_on "alsa-lib"
    depends_on "libxv"
  end

  on_intel do
    depends_on "nasm" => :build
  end

  fails_with gcc: "5"

  # Fix for QtWebEngine, do not remove
  # https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=270209
  patch do
    url "https://gitlab.archlinux.org/archlinux/packaging/packages/ffmpeg/-/raw/5670ccd86d3b816f49ebc18cab878125eca2f81f/add-av_stream_get_first_dts-for-chromium.patch"
    sha256 "57e26caced5a1382cb639235f9555fc50e45e7bf8333f7c9ae3d49b3241d3f77"
  end

  def install
    args = %W[
      --prefix=#{prefix}
      --enable-shared
      --cc=#{ENV.cc}
      --host-cflags=#{ENV.cflags}
      --host-ldflags=#{ENV.ldflags}
      --enable-gpl
      --enable-libaom
      --enable-libdav1d
      --enable-libmp3lame
      --enable-libopus
      --enable-libsnappy
      --enable-libtheora
      --enable-libvorbis
      --enable-libvpx
      --enable-libx264
      --enable-libx265
      --enable-libfontconfig
      --enable-libfreetype
      --enable-frei0r
      --enable-libass
      --enable-demuxer=dash
    ]

    if OS.mac?
      args << "--enable-opencl"
      args << "--enable-audiotoolbox"
      args << "--enable-videotoolbox"
      args << "--enable-neon" if Hardware::CPU.arm?
    end

    args << "--disable-htmlpages" # The same info is accessible through the man pages.
    args << "--enable-chromaprint" if build.with? "chromaprint"
    args << "--enable-libaribb24" if build.with? "libaribb24"
    args << "--enable-libbluray" if build.with? "libbluray"
    args << "--enable-libbs2b" if build.with? "libbs2b"
    args << "--enable-libcaca" if build.with? "libcaca"
    args << "--enable-libfdk-aac" if build.with? "fdk-aac"
    args << "--enable-libflite" if build.with? "libflite"
    args << "--enable-libgme" if build.with? "game-music-emu"
    args << "--enable-libgsm" if build.with? "libgsm"
    args << "--enable-libjxl" if build.with? "jpeg-xl"
    args << "--enable-libmodplug" if build.with? "libmodplug"
    args << "--enable-libopenh264" if build.with? "openh264"
    args << "--enable-libopenjpeg" if build.with? "openjpeg"
    args << "--enable-libopenmpt" if build.with? "libopenmpt"
    args << "--enable-librav1e" if build.with? "rav1e"
    args << "--enable-libsvtav1" if build.with? "svt-av1"
    args << "--enable-librist" if build.with? "librist"
    args << "--enable-librsvg" if build.with? "librsvg"
    args << "--enable-librtmp" if build.with? "rtmpdump"
    args << "--enable-librubberband" if build.with? "rubberband"
    args << "--enable-libsoxr" if build.with? "libsoxr"
    args << "--enable-libspeex" if build.with? "speex"
    args << "--enable-libsrt" if build.with? "srt"
    args << "--enable-libssh" if build.with? "libssh"
    args << "--enable-libtesseract" if build.with? "tesseract"
    args << "--enable-libtwolame" if build.with? "two-lame"
    args << "--enable-libvidstab" if build.with? "libvidstab"
    args << "--enable-libvmaf" if build.with? "libvmaf"
    args << "--enable-libwebp" if build.with? "webp"
    args << "--enable-libxml2" if build.with? "libxml2"
    args << "--enable-libxvid" if build.with? "xvid"
    args << "--enable-libzimg" if build.with? "zimg"
    args << "--enable-libzmq" if build.with? "zeromq"
    args << "--enable-openssl" if build.with? "openssl"

    # These librares are GPL-incompatible, and require ffmpeg be built with
    # the "--enable-nonfree" flag, which produces unredistributable libraries
    args << "--enable-nonfree" if build.with?("decklink") || build.with?("fdk-aac") || build.with?("openssl")

    if build.with? "decklink"
      args << "--enable-decklink"
      args << "--extra-cflags=-I#{HOMEBREW_PREFIX}/include"
      args << "--extra-ldflags=-L#{HOMEBREW_PREFIX}/include"
      mv "VERSION", "VERSION.txt"
    end

    if build.with? "jack"
      ENV.prepend_path "PKG_CONFIG_PATH", Formula["jack"].opt_lib/"pkgconfig"
      args << "--enable-libjack"
      args << "--enable-indev=jack"
    end

    if build.with? "libzvbi"
      ENV.prepend_path "PKG_CONFIG_PATH", Formula["zvbi"].opt_lib/"pkgconfig"
      args << "--enable-libzvbi"
    end

    args << "--enable-version3" if build.with?("opencore-amr") || build.with?("libvmaf")

    if build.with? "opencore-amr"
      args << "--enable-libopencore-amrnb"
      args << "--enable-libopencore-amrwb"
    end

    system "./configure", *args
    system "make", "install"

    # Build and install additional FFmpeg tools
    system "make", "alltools"
    bin.install Dir["tools/*"].select { |f| File.executable? f }
    mv bin/"python", pkgshare/"python", force: true

    if build.with? "tesseract"
      opoo <<~EOS
        The default `tesseract` dependency includes limited language support.
        To add all supported languages, install the `tesseract-lang` formula.
      EOS
    end
  end

  test do
    # Create an example mp4 file
    mp4out = testpath/"video.mp4"
    system bin/"ffmpeg", "-filter_complex", "testsrc=rate=1:duration=1", mp4out
    assert_predicate mp4out, :exist?
  end
end
```


## again

from https://www.rickmakes.com/compiling-ffmpeg-on-mac-with-apple-silicon-requires-macports/



`sudo port selfupdate`
``

`cd /Users/mk/Development/_ffmpeg`
`tar jxvf ffmpeg-6.0.tar.xz`

```
sudo port -N install libass libfdk-aac lame libopus libtheora libogg libvorbis libbluray dav1d libmodplug libmodplug librsvg speex x265 XviD libsdl2 gnutls soxr openjpeg x264
```

```
./configure --prefix=/opt/local --enable-swscale --enable-avfilter --enable-avresample --enable-libmp3lame --enable-libvorbis --enable-libopus --enable-librsvg --enable-libtheora --enable-libopenjpeg --enable-libmodplug --enable-libsoxr --enable-libspeex --enable-libass --enable-libbluray --enable-lzma --enable-gnutls --enable-fontconfig --enable-libfreetype --enable-libfribidi --disable-libjack --disable-libopencore-amrnb --disable-libopencore-amrwb --disable-libxcb --disable-libxcb-shm --disable-libxcb-xfixes --disable-indev=jack --enable-opencl --disable-outdev=xv --enable-audiotoolbox --enable-videotoolbox --enable-sdl2 --disable-securetransport --mandir=/opt/local/share/man --enable-static --enable-pthreads --cc=/usr/bin/clang --enable-libdav1d --enable-libx265 --enable-gpl --enable-postproc --enable-libx264 --enable-libxvid --enable-nonfree --enable-libfdk-aac --extra-ldflags=-L/opt/local/lib
```



--extra-cflags=-I/Users/mk/Development/_blackmagic/SDK/Mac/include --extra-ldflags=-L/Users/mk/Development/_blackmagic/SDK/Mac/include

```
./configure --prefix=/opt/local --enable-swscale --enable-avfilter --enable-libopenjpeg --enable-fontconfig --enable-libfreetype --enable-libfribidi --enable-opencl --disable-outdev=xv --enable-audiotoolbox --enable-videotoolbox --enable-sdl2 --disable-securetransport --mandir=/opt/local/share/man --enable-static --enable-pthreads --cc=/usr/bin/clang --enable-libdav1d --enable-libx265 --enable-gpl --enable-postproc --enable-libx264 --enable-nonfree  --enable-libfdk-aac --extra-ldflags=-L/opt/local/lib --extra-cflags=-I/Users/mk/Development/_blackmagic/SDK/Mac/include --extra-ldflags=-L/Users/mk/Development/_blackmagic/SDK/Mac/include --enable-decklink
```


```
./configure --prefix=/opt/local --enable-swscale --enable-avfilter --enable-libvorbis --enable-libopus --enable-libtheora --enable-libopenjpeg --enable-libmodplug --enable-libass --enable-libbluray --enable-lzma --enable-gnutls --enable-fontconfig --enable-libfreetype --enable-libfribidi --disable-libjack --disable-libopencore-amrnb --disable-libopencore-amrwb --disable-libxcb --disable-libxcb-shm --disable-libxcb-xfixes --disable-indev=jack --enable-opencl --disable-outdev=xv --enable-audiotoolbox --enable-videotoolbox --enable-sdl2 --disable-securetransport --mandir=/opt/local/share/man --enable-static --enable-pthreads --cc=/usr/bin/clang --enable-libdav1d --enable-gpl --enable-postproc --enable-libx264 --enable-libxvid --enable-nonfree --enable-libfdk-aac --extra-ldflags=-L/opt/local/lib --extra-cflags=-I/Users/mk/Development/_blackmagic/SDK/Mac/include --extra-ldflags=-L/Users/mk/Development/_blackmagic/SDK/Mac/include --enable-decklink --extra-ldflags=-L/opt/homebrew/lib --extra-cflags=-I/opt/homebrew/include

```



make -j 12




## gists

segments.

`ffmpeg -f avfoundation -framerate 24 -video_size 1920x1080 -i "Blackmagic Design" -c:v libx264 -t 600 -f segment -segment_time 10 -reset_timestamps 1 -segment_format mkv /Users/mk/Development/_blackmagic/_output/output_%03d.mkv`


`ffmpeg -f avfoundation -framerate 24 -video_size 1920x1080 -i "Blackmagic Design" -c:v libx264 -t 60 -f segment -segment_time 10 -segment_format mkv /Users/mk/Development/_blackmagic/_output/output_%03d.mkv`


`ffmpeg -f avfoundation -framerate 24 -video_size 1920x1080 -i "Blackmagic Design" -c:v libx264 -t 10 /Users/mk/Development/_blackmagic/_output/output-3.mkv`




ffmpeg -f avfoundation -framerate 24 -video_size 1920x1080 -i "Blackmagic Design" -c:v libx264 -t 60 -f segment -segment_time 5 -reset_timestamps 1 /Users/mk/Development/_blackmagic/_output/output_%03d.mkv

ffmpeg -f avfoundation -framerate 24 -video_size 1920x1080 -i "Blackmagic Design" -c:v libx264 -t 10 /Users/mk/Development/_blackmagic/_output/output-3.mkv


ffmpeg -f avfoundation -framerate 24 -video_size 1920x1080 -i "Blackmagic Design" -t 10 "/Users/mk/Development/_blackmagic/_output/output.mkv

