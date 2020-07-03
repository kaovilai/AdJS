# AdJS - Skip fiddling with HTML code everytime you have a new sponsor 😜

AdJS is a suite of tools that make embedding a list of linked images easy.
Makes it easy to embed thirdparty ads without editing Blogger themes HTML so you don't lose theme preview.

See test site at [adjs.tig.pw](https://adjs.tig.pw)
Currently being used on [my blog](https://blog.tig.pw), and some other [fun](https://www.ใน.ไทย) [sites](https://www.with.in.th)

Issues and PRs welcome.

##### Documentation are in JSDoc format inside [ad.js](./ad.js)

## Getting Started

1. Place one of the [snippets](/snippets.html) where you want ads to show up
```html
<!-- Sidebar ad snippet -->
<div id="sidebar-ad"></div>
<script src="https://adjs.tig.pw/ad.js" onload="populateSidebar();" defer></script>
```
2. **Under Development:** Put in your json file as the source parameter formatted like this [this](/ad.json)
```
{
    "header":[
        {
            "network":"",
            "company":"",
            "campaign":"",
            "href":"",
            "img":"",
            "expire":false
        }
    ],
    "sidebar":[
                    "network":"",
                    "company":"",
                    "campaign":"",
                    "href":"",
                    "img":"",
                    "expire":true
                }
    ],
    "midpage":[

    ],
    "footer":[

    ]
}
```

## Blogger Setup

Go to your site's layouts page and embed the script through adding _HTML/Script gadget_ to sidebars or other areas.

You can then choose what elementId aka `id="*"` get to have an ad, and it can be anything you can see with your browser's DevTools. In [my blog](https://blog.tig.pw), I was able to simply replace to footer area. With some further enhancements, _AdJS_ should be able to add onto the page instead of replacing `.innerhtml`. Now editing blogger themes will be in your past. Switching themes is easy without risk losing your setup.