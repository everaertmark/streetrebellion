Tentamen Programmeren 8

StreetRebellion uitleg:
Een beruchte crimineel is gevlucht uit een gevangenis en heeft als doel om van de politie te ontsnappen via een gestolen auto. 

Fork request naar Giny van der Wegen:
- https://github.com/everaertmark/TheWooFarm
- https://github.com/ginyvdw/TheWooFarm

Installatie instructies.

Download de game en ga naar de folder "docs" en open het "index.html" bestand in je browser. Er hoeft verder niks geïnstalleerd te worden.

Speluitleg

Met de arrow keys kan de speler zijn auto besturen. Door het aanrijden van burgerauto's krijgt de crimineel punten. Door het verzamelen van punten kan de crimineel zich veroorloven om geraakt te worden door een politieauto. Dit is linksbovenin te zien bij Health. Door het oppakken van kistjes op het veld zorgt de crimineel ervoor dat de politieauto's langzamer rijden (gedurende 4 seconden), waardoor het ontwijken makkelijker zal gaan.

Pull request

Met de pull request had ik een basis layout om mee te beginnen. Dit hielp mij om aan de slag te gaan met de componenten die nodig zijn om het bouwen van een game mogelijk te maken. 

Peer review

https://github.com/Tim0182/CMTPRG01-8/issues/7

Tijdens de peer review heb ik gemerkt dat het toepassen van een strategy pattern het mogelijk maakt om de functionaliteiten van een object te splitsen. Door het splitsen van de functionaliteiten, kun je later gemakkelijk dingen aanpassen of verwijderen, zonder dat dit gevolgen heeft voor de rest van het object. Daarnaast zorgt een strategy pattern er ook voor dat de code overzichtelijker en zo ook makkelijker te onderhouden is. (omdat de code is opgesplitst) Hierdoor kan ik efficiënter te werk gaan.

Design Patterns


Singleton:

De Singleton is toegepast op de 'score' class. De score wordt 1x aangemaakt en kan niet opnieuw aangemaakt worden. Hierdoor spreekt elke class in de game dezelfde instantie van de score class aan. De attributen van de score worden telkens geupdatet zodra de crimineel weer een burgerauto raakt (of een politieauto).

Strategy & Observer:

De strategy pattern is gebruikt voor het gedrag van de politie auto's. In de map drivebehaviour staan de twee behaviours 'normal' en 'fragile'(strategies).  Wanneer de politieauto het gedrag (strategy) 'normal' heeft, beweegt de auto op een normale snelheid. Bij het gedrag 'fragile' rijdt de politieauto heel langzaam, waardoor hij makkelijk ontweken kan worden. De observer pattern is toegepast op de 'score' class. Aangezien deze class ook al een singleton is, kan hij door iedere class benadert worden en weet je zeker dat elke class in de game dezelfde instantie benadert. In de score class kunnen politieauto's zichzelf 'subscriben'. Wanneer de crimineel over een lootcrate rijdt, notified de subject (score class) alle gesubscribede politie auto's en zorgt het ervoor dat de behaviour (strategy) van de politie auto's wordt aangepast naar 'fragile'.

Polymorphisme:

De classes police.ts, civilian.ts extenden allebei van vehicle.ts - fragile.ts en normal.ts extenden van drivebehaviour, hierdoor is er een uniforme aanroep gecreëerd voor verschillende objecten, aangezien ze dezelfde parent class delen.

Klassendiagram:

https://github.com/everaertmark/streetrebellion/blob/master/rebellionclass.png

Game live:

https://stud.hosted.hr.nl/0902764/streetrebellion/