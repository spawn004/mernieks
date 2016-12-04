var categories = [
          "clients",
          "Partneri",
          "Visi"
      ];

    //   document.write("<div><p>");
    var container = document.getElementsByClassName('filtr')[0];
      for (var i = 0; i < categories.length; i++){
          var button = ("<button id='" + categories[i] + "'>" + categories[i] +"</button>");
          container.insertAdjacentHTML('beforeend',button);
          document.getElementById(categories[i]).onclick = function(event) {

              var targetId = event.target.id,
                  companyLogos = document.getElementsByClassName("logo-" +targetId),
                  showAllLogos = document.getElementsByClassName("logotype");

              for (var item of showAllLogos) {
                  item.style.display = 'inline-block'
              }


              for (var hideElement of companyLogos) {
                console.log(hideElement);
                hideElement.style.display = 'none'
              }
          };

      }
    //   document.write("</p></div>");
    var logos = [
              {
                  logoid: 0,
                  slug: "logotype-img1",
                  image: 'LR',
                  id: 0
              },
              {
                  logoid: 1,
                  slug: "logotype-img2",
                  image: "LVM",
                  id: 0
              },
              {
                  logoid: 0,
                  slug: "logotype-img3",
                  image: "Gibson",
                  id: 0
              },
              {
                  logoid: 1,
                  slug: "logotype-img4",
                  image: "BB",
                  id: 0
              },
              {
                  logoid: 0,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 0
              },
              {
                  logoid: 0,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 0
              },
              {
                  logoid: 1,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 0
              },
              {
                  logoid: 0,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 0
              },
              {
                  logoid: 0,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 0
              },
              {
                  logoid: 1,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 1
              },
              {
                  logoid: 1,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 1
              },
              {
                  logoid: 1,
                  slug: "logotype-img5",
                  image: "BSF",
                  id: 1
              },
              ]
              var element = document.getElementsByClassName("carousel-slide")[0];
          // document.write("<div class='carousel-slide'>");
              for (var i = 0; i < logos.length; i++){
                  var href = "cat-"+ logos[i].logoid + "/" + logos[i].slug;
                  var logoElement = (
                      "<a href=" + href + " class='logotype logo-" +categories[logos[i].logoid]+"'>" +
                          "<img src='img/" + logos[i].image + ".png'>" +
                          // "<span>" + categories[logos[i].logoid] + "</span>" +
                      "</a>");
                  element.insertAdjacentHTML('beforeend', logoElement);
          }
