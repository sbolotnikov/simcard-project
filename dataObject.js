let dataObject = {
    mainEmail:'Таинственный переулок<pereulok_74@mail.ru>',
    startTime:9,
    endTime:23,
    timeBeforeRefresh:[0,4,0],
    widthSpan:100,
    games : [
        {
          name: `Квест "Тайны Гудини"` ,
          id: 'houdini',
          bgImage: '/images/gudini.jpg',
          img:'/icons/rabbit_hat.svg',
          short:'Гудини был великим, каждое его представление поражало воображение, он был лучшим до этого момента...',
          toWhom:' возрастное ограничение 15+',
          price:2000,
          description:'Гарри Гудини был великим, каждое его представление поражало воображение, он был лучшим до этого момента!<br>В городе появился новый иллюзионист, он с легкостью повторяет все трюки великого мастера и, кажется, превосходит его! Он – новый Гудини, а многие уверены, что это сам великий фокусник, которому удалось обмануть смерть.<br> Дополнительную таинственность его образу придает маска, которую он никогда не снимает.<br> Вы – группа журналистов, проникаете в поисках сенсационного материала в гримерку иллюзиониста, пока он находится на выступлении.<br> Сможете ли вы раскрыть тайну его личности? Узнать его секреты? И не попасться хозяину комнаты на глаза?',
          prices:
          "Стоимость игры для команды от 2 до 4 человек – от <b>2000</b> до <b>3000 рублей.</b><br> Доплата за 5го и 6го игрока – <b>500 рублей за каждого</b>",
          booking:
            'Время прохождения квеста: 60 минут.',
          gameLength:60,  
          locs: [0],
          minParticipants:2,
          maxParticipants:6
        },
        

              ],
      locations: [
        
        {
            name: 'Simcard Project',
            description: 'inside retail office',
            symbol: '/images/logo.png',
            address: "New York, NY,<br> 1 Fifth Ave #2",
            address_short:"1 Fifth ave, New York, NY",
            telephone: "+1 (917) 916-28-40",
            email: "vasya_pupkin@gmail.com",
            address_desc:`somewhere near</br>
             <br> Come visit us!!!`,
            coordinates:{x:55.2038,y:61.3264,zoom:17.23},
            coordinates1:{x:55.20358,y:61.32539,text:"Enter"}
        },
      ], 
    
  };
  
  export default dataObject;