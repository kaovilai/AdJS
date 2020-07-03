# AdJS - Skip fiddling with HTML code everytime you have a new sponsor 😜

AdJS is a suite of tools that make embedding a list of linked images easy.
Makes it easy to embed thirdparty ads without editing Blogger themes HTML so you don't lose theme preview.

See test site at [adjs.tig.pw](https://adjs.tig.pw)
Currently being used on [my blog](blog.tig.pw), and some other [fun](https://www.ใน.ไทย) [sites](https://www.with.in.th)

Issues and PRs welcome.

## Getting Started

1. Place one of the [snippets](/snippets.html) where you want ads to show up
```html
<!-- Sidebar ad snippet -->
<div id="sidebar-ad"></div>
<script src="https://adjs.tig.pw/ad.js" onload="populateSidebar();" defer></script>
```
1. **Under Development:** Put in your json file as the source parameter formatted like this [this](/ad.json)
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

