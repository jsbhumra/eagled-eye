if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),f={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Bg_1.png",revision:"75da823520169a662b143ef2ab870707"},{url:"/Bg_2.png",revision:"f57d98eec8034ff37f9414c7dcb68ab4"},{url:"/Ellipse 1.png",revision:"adc2f6eea4fe2a4bbe7718b65bb14de6"},{url:"/Ellipse 2.png",revision:"808e96a19848fffeb4b81b85e8ca153f"},{url:"/Ellipse 3.png",revision:"83a1b0aa9385fabb3a14cc04325122c1"},{url:"/Profile.png",revision:"6c134902a85fed03099ee31df8a73905"},{url:"/Read.png",revision:"c3042f5965391925c3c9f27ca69cd044"},{url:"/Search_logo.png",revision:"a5e108e6475f5395b99dd94cd04625b0"},{url:"/Write.png",revision:"daf1c3585408d1706c9d6b0176712d6e"},{url:"/_next/static/GAH4PO7zCzJgL556TaE9m/_buildManifest.js",revision:"6ec17fd715ed6febcc9ba99285d48978"},{url:"/_next/static/GAH4PO7zCzJgL556TaE9m/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/169-b64e0496f29f6445.js",revision:"b64e0496f29f6445"},{url:"/_next/static/chunks/61-ed6719157a90cdbf.js",revision:"ed6719157a90cdbf"},{url:"/_next/static/chunks/947-4f3cfa6531716deb.js",revision:"4f3cfa6531716deb"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-c256fb04ba725c1e.js",revision:"c256fb04ba725c1e"},{url:"/_next/static/chunks/pages/_app-e5a0a2bd99890dad.js",revision:"e5a0a2bd99890dad"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/forgot-956968526dc54612.js",revision:"956968526dc54612"},{url:"/_next/static/chunks/pages/index-756773fbebff1e3c.js",revision:"756773fbebff1e3c"},{url:"/_next/static/chunks/pages/login-164ad66cb1ea2344.js",revision:"164ad66cb1ea2344"},{url:"/_next/static/chunks/pages/myacc-c2c69a5ddeb804af.js",revision:"c2c69a5ddeb804af"},{url:"/_next/static/chunks/pages/myreviews-55949dd78d4785f1.js",revision:"55949dd78d4785f1"},{url:"/_next/static/chunks/pages/newlogin-ec7ff2eaf27cd06b.js",revision:"ec7ff2eaf27cd06b"},{url:"/_next/static/chunks/pages/newsignup-2bca571093119267.js",revision:"2bca571093119267"},{url:"/_next/static/chunks/pages/opensearch-6b78adef51b6864e.js",revision:"6b78adef51b6864e"},{url:"/_next/static/chunks/pages/review/%5Bid%5D-b084209c1afeeb59.js",revision:"b084209c1afeeb59"},{url:"/_next/static/chunks/pages/search-5f5f123ab0f92b3f.js",revision:"5f5f123ab0f92b3f"},{url:"/_next/static/chunks/pages/signup-978611b579ae9a74.js",revision:"978611b579ae9a74"},{url:"/_next/static/chunks/pages/writereview-180999f42eaa3b6d.js",revision:"180999f42eaa3b6d"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/13b4a738d5c20182.css",revision:"13b4a738d5c20182"},{url:"/_next/static/css/19940ffa9e6c253c.css",revision:"19940ffa9e6c253c"},{url:"/_next/static/css/5279bbf579c4e05f.css",revision:"5279bbf579c4e05f"},{url:"/_next/static/css/ae1f197e7d520d5c.css",revision:"ae1f197e7d520d5c"},{url:"/_next/static/css/bc81ef3c8fec87e6.css",revision:"bc81ef3c8fec87e6"},{url:"/_next/static/css/cdda529215dda4d6.css",revision:"cdda529215dda4d6"},{url:"/_next/static/css/ed364639a0d9eb50.css",revision:"ed364639a0d9eb50"},{url:"/_next/static/css/f271f3deebc503dd.css",revision:"f271f3deebc503dd"},{url:"/_next/static/media/Bg_1.fd32eeee.png",revision:"75da823520169a662b143ef2ab870707"},{url:"/_next/static/media/Bg_1.fd32eeee.png",revision:"fd32eeee"},{url:"/_next/static/media/Bg_2.54971495.png",revision:"f57d98eec8034ff37f9414c7dcb68ab4"},{url:"/_next/static/media/Ellipse 1.96080bab.png",revision:"adc2f6eea4fe2a4bbe7718b65bb14de6"},{url:"/_next/static/media/Ellipse 2.4a8c01c5.png",revision:"808e96a19848fffeb4b81b85e8ca153f"},{url:"/_next/static/media/Ellipse 3.953e98c8.png",revision:"83a1b0aa9385fabb3a14cc04325122c1"},{url:"/_next/static/media/Profile.a2f9f4fa.png",revision:"6c134902a85fed03099ee31df8a73905"},{url:"/_next/static/media/logo.eb311bbc.png",revision:"94fe0803f620e35848b8e66f621f7078"},{url:"/b.png",revision:"5004f0576f5b65659389c53ea2b696d5"},{url:"/favicon.ico",revision:"ef93c5223749893f9bb324725d81e329"},{url:"/icon-192x192.png",revision:"18977b70c477fca694d7e331291a27af"},{url:"/icon-256x256.png",revision:"2f56b3c843f5f3eaa53ecc24b8a0d5b9"},{url:"/icon-384x384.png",revision:"53fb8db3e2ab48732a3fa518f172ea46"},{url:"/icon-512x512.png",revision:"6ca2ad4b9891d333a876847c32aaee26"},{url:"/logo.png",revision:"94fe0803f620e35848b8e66f621f7078"},{url:"/manifest.json",revision:"2576483f9fb151d97b875f11a138386a"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
