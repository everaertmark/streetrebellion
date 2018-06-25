Tentamen Programmeren 8

StreetRebellion uitleg:
Een beruchte crimineel is gevlucht uit een gevangenis en heeft als doel om van de politie te ontsnappen via een gestolen auto. 

Fork request naar Giny van der Wegen:
- https://github.com/everaertmark/TheWooFarm
- https://github.com/ginyvdw/TheWooFarm

Installatie instructies.

Download de game en ga naar de folder "docs" en open het "index.html" bestand in je browser. Er hoeft verder niks geïnstalleerd te worden.

Speluitleg

Met de arrow keys kan de speler zijn auto besturen. Door het aanrijden van burgerauto's krijgt de crimineel punten. Door het verzamelen van punten kan de crimineel zich veroorloven om geraakt te worden door een politieauto. Dit is linksbovenin te zien bij Health. Door het oppakken van kistjes op het veld zorgt de crimineel ervoor dat de politieauto's langzamer rijden, waardoor het ontwijken makkelijker zal gaan.

Pull request
Met de pull requ
est had ik een basis layout om mee te beginnen. Dit hielp mij om aan de slag te gaan met de componenten die nodig zijn om het bouwen van een game mogelijk te maken. 

Peer review

https://github.com/Tim0182/CMTPRG01-8/issues/7

Design Patterns


Singleton:

De Singleton is in de score.ts geplaatst. De score wordt 1x aangemaakt en kan niet opnieuw aangemaakt worden. De attributen van de score worden telkens geupdatet zodra de crimineel weer een burgerauto raakt (of een politieauto).

Strategy & Observer:

De strategy pattern is aangemaakt in de drivebehaviour en in de game.ts. In de gameloop wordt er gekeken welke vehicle aangemaakt wordt (police of civilian). In de drivebehaviour wordt bekeken welke drivebehaviour wordt gekoppeld aan de politieauto(fragile, normal). Hier komt ook de observer in terug. In police.ts wordt gekeken of de politieauto langzamer moet gaan rijden zodra de crimineel een kistje oppakt. 

Polymorphisme:

De classes police.ts, civilian.ts extenden allebei van vehicle.ts - fragile.ts en normal.ts extenden van drivebehaviour

Klassendiagram:

https://github.com/everaertmark/streetrebellion/blob/master/rebellionclass.png

Game live:

https://stud.hosted.hr.nl/0902764/streetrebellion/