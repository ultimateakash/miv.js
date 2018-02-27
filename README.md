# miv.js
miv.js (Multiple Image Video) is a simple jquery plugin for uploading multiple images, videos  (By Akash Verma)

<a href="javascript:;"><img src="https://mercury.promaticstechnologies.com/mivjs.gif" alt="miv.js demo"></a>

## Usage

Initalize 
```js
$('.gallery').miv();
```

```js
$('class/id where you want to show image').miv({image:'class/id of anchor ',video:'class/id of anchor'});
```
Example [click here](https://mercury.promaticstechnologies.com/MinufDB/example.html).
```html
  <ul>
      <li>
          <a class="cam" href="javascript:void(0)"><span><i class="fa fa-camera fa-fw"></i></span>
          </a>
      </li>
      <li>
          <a class="vid" href="javascript:void(0)"><span><i class="fa fa-video-camera fa-fw"></i></span>
          </a>
      </li>
  </ul>
```

For Multiple Video And Image
```js
$('.gallery').miv({image:'.cam',video:'.vid'});
```

For Multiple Video
```js
$('.gallery').miv({video:'.vid'});
```

For Multiple Image
```js
$('.gallery').miv({image:'.cam'});
```

## Support

Contact Me
Email: Ultimateakash311@gmail.com
Mobile:  +919761075358
Whatsapp:+918265918566

