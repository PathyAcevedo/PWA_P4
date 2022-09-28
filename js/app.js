if (navigator.serviceWorker) {
  // console.log("hola si se soporto");
  navigator.serviceWorker.register("/sw.js");
  
  const cachePromise = caches.open('cache-V1').then((cache) => {
    return cache.addAll(
        [
            '/',
            '/index.html',
            '/pages/sumar.html',
            '/pages/restar.html',
            '/pages/multplicar.html',
            '/pages/dividir.html',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'
        ]
    );
})
event.waitUntil(cachePromise); //Promise.all([promesa1, promesa2, promesa3])
    
  self.addEventListener('fecth',(event)=>{
    //const respCache = caches..
    event.respondWith(fectch(event.request)); //espera la respuesta de un response
    //event.respondWith(respCache)
  })

}
/*
//if (window.caches) {
  console.log("hey soportas cache");
  //abre el cache y si no exite lo crea
  caches.open("cache-v1");
  caches.open("cache-v2");
  caches.open("cache-v3");

  caches.keys().then((keys) => {
    console.log(keys);
  });
  //especifica y devuelve si tienes un cache que exita o no exita
  caches.match("cache-v4").then((resp) => {
    console.log(resp);
  });

  caches.open("cache-v1").then((uncache) => {
    uncache.add("/index.html");
    uncache.add("/images/img2.jpg");
    uncache.add("/css/style.css");

    uncache
      .addAll(["/index.html", "/images/img2.jpg", "/css/style.css"])
      .then((e) => {
        uncache.delete("/images/img2.jpg");
      });

    uncache.match("/index.html").then((resp) => {
      resp.text().then((text) => {
        console.log("match", text);
      });
    });
  });
  caches.delete("cache-v3");
//}*/
