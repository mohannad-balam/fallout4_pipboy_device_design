$(document).ready(function () {
     var weapons = [{
          "name": "44_pistol",
          "damage": 48,
          "fire_rate": 6,
          "range": 89,
          "accuracy": 66,
          "weight": 4.2,
          "value": 99
     },
     {
          "name": "10mm_pistol",
          "damage": 18,
          "fire_rate": 46,
          "range": 119,
          "accuracy": 61,
          "weight": 5.6,
          "value": 53
     },
     {
          "name": "assault_rifle",
          "damage": 30,
          "fire_rate": 40,
          "range": 109,
          "accuracy": 72,
          "weight": 13.1,
          "value": 144
     },
     {
          "name": "ak-47",
          "damage": 32,
          "fire_rate": 36,
          "range": 159,
          "accuracy": 52,
          "weight": 7.8,
          "value": 104
     },
     {
          "name": "mp-7",
          "damage": 17,
          "fire_rate": 52,
          "range": 101,
          "accuracy": 66,
          "weight": 4.6,
          "value": 204
     },
     {
          "name": "hunting-rifle",
          "damage": 90,
          "fire_rate": 5,
          "range": 321,
          "accuracy": 89,
          "weight": 9.5,
          "value": 199
     },
     {
          "name": "cross-bow",
          "damage": 120,
          "fire_rate": 2,
          "range": 221,
          "accuracy": 98,
          "weight": 11.5,
          "value": 166
     },
     {
          "name": "rbg",
          "damage": 150,
          "fire_rate": 1.5,
          "range": 255,
          "accuracy": 54,
          "weight": 17.6,
          "value": 366
     },
     {
          "name": "grenade",
          "damage": 100,
          "fire_rate": 0,
          "range": 50,
          "accuracy": 77,
          "weight": 2.1,
          "value": 25
     },
     {
          "name": "throwing-knife",
          "damage": 100,
          "fire_rate": 0,
          "range": 69,
          "accuracy": 98,
          "weight": 1.9,
          "value": 33
     }
     ];

     $('.item-list a').on('click' , function(e){
          $('.item-list a').removeClass('active');
          $(e.currentTarget).addClass('active');
     });

     $('.item-list a').on('mouseenter', function(e){
          var current_item = $(e.currentTarget).attr('class');
          console.log(current_item);

          for(item in weapons){
               if(weapons[item].name == current_item){
                    console.log(weapons[item]);

                    var container = $('.items-stats');
                    container.find('.damage').html(weapons[item].damage);
                    container.find('.fire_rate').html(weapons[item].fire_rate);
                    container.find('.accuracy').html(weapons[item].accuracy);
                    container.find('.range').html(weapons[item].range);
                    container.find('.weight').html(weapons[item].weight);
                    container.find('.value').html(weapons[item].value);
               }
          }
     });



});