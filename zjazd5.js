console.log("Zadania ze zjazdu 5.");

/*
//-------------------11.1---------

function auto(){
	this.rok = 0;
	this.przebieg = 0;
	this.cena_wyjsciowa = 0;
	this.cena_koncowa = 0;
	
	//----- a)
	this.powiekszCeneWyjsciowa = function(){
		this.cena_wyjsciowa += 1000;
	},
	
	//----- b)
	this.obnizCeneKoncowaWiek = function(){
		rabat = (2023 - this.rok) * 1000;
		this.cena_koncowa = this.cena_wyjsciowa - rabat;
	},
	
	//----- c)
	this.obnizCeneKoncowaPrzebieg = function(){
		rabat = 10000 * Math.floor(this.przebieg / 100000);
		this.cena_koncowa -= rabat;
	},

	//----- d)
	this.dopiszPrzebiegRok = function(przebieg, rok){
		this.przebieg = przebieg;
		this.rok = rok;
		
		this.powiekszCeneWyjsciowa();
		this.obnizCeneKoncowaPrzebieg();
		this.obnizCeneKoncowaWiek();
	}
}

function test(){
		var s = new auto();
		console.log("Utworzono obiekt " + auto());
		
		s.dopiszPrzebiegRok(475123, 2015);
		console.log("dopiszPrzebiegRok(475123, 2015) " + auto());
}

*/

//-------------------11.1---------

function auto(rok, przebieg, cena_wyjsciowa){
	this.rok = rok;
	this.przebieg = przebieg;
	this.cena_wyjsciowa = cena_wyjsciowa;
	this.cena_koncowa = cena_wyjsciowa;
	
	//----- a)
	this.powiekszCeneWyjsciowa = function(){
		this.cena_wyjsciowa += 1000;
		//aktualizuje tez cene koncowa
		this.cena_koncowa = this.cena_wyjsciowa;
	},
	
	//----- b)
	this.obnizCeneKoncowaWiek = function(){
		rabat = (2023 - this.rok) * 1000;
		this.cena_koncowa = this.cena_koncowa - rabat;
	},
	
	//----- c)
	this.obnizCeneKoncowaPrzebieg = function(){
		rabat = 10000 * Math.floor(this.przebieg / 100000);
		this.cena_koncowa -= rabat;
	},

	//----- d)
	this.dopiszPrzebiegRok = function(przebieg, rok){
		this.przebieg = przebieg;
		this.rok = rok;
		
		this.powiekszCeneWyjsciowa();
		this.obnizCeneKoncowaPrzebieg();
		this.obnizCeneKoncowaWiek();
	}
}

function test11(rok, przebieg, cena_wyjsciowa){
		var s = new auto(rok, przebieg, cena_wyjsciowa);
		console.log("Utworzono obiekt auto: rok:" + s.rok + " przebieg:" + s.przebieg + " cena_wyjsciowa:" + s.cena_wyjsciowa + " cena_koncowa:" + s.cena_koncowa);
		
		s.dopiszPrzebiegRok(200000, 2022);
		console.log("Po wywołaniu metody dopiszPrzebiegRok(200000, 2022): rok:" + s.rok + " przebieg:" + s.przebieg + " cena_wyjsciowa:" + s.cena_wyjsciowa + " cena_koncowa:" + s.cena_koncowa);
}

//-------------------11.2---------

	var samochody = [];
	samochody[0] = new auto(1999, 789123, 3500);
	samochody[1] = new auto(1979, 25000, 350000);
	samochody[2] = new auto(2020, 159000, 67000);
	samochody[3] = new auto(2014, 231850, 52000);
	samochody[4] = new auto(2006, 457321, 15000);
	samochody[5] = new auto(1988, 989123, 1500);
	samochody[6] = new auto(2023, 10, 249000);
	samochody[7] = new auto(2010, 321789, 47800);
	samochody[8] = new auto(1996, 813345, 5500);
	samochody[9] = new auto(2001, 189543, 8450);
	
	
function dodajSamochod(rok, przebieg, cena_wyjsciowa){
	car = new auto(rok, przebieg, cena_wyjsciowa);
	if (car.cena_koncowa > 10000){
		samochody.push(car);
	}
}

function pokazSamochody(){
	for (let i = 0; i < samochody.length; i++){
		console.log("Auto nr " + i + ": rok: " + samochody[i].rok + " przebieg: " + samochody[i].przebieg + " cena_wyjsciowa: " + samochody[i].cena_wyjsciowa);
	}
}

function zwiekszRokSamochodow(){
	for (let i = 0; i < samochody.length; i++){
		samochody[i].rok++;
	}
}

//-------------------12.1---------

function Ocena(przedmiot, wartosc){
	this.przedmiot = przedmiot;
	this.wartosc = wartosc;
}

//-------------------12.2---------

function Student(imie, nazwisko){
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.srednia = 0;
	this.oceny = [];
	this.hello = function(){
		return ("Witaj " + this.imie + " " + this.nazwisko + ", Twoja średnia ocen: " + this.srednia);
	}
//-------------------12.3---------
	this.setOcena = function(stopien){
		if (stopien instanceof Ocena){
			this.oceny.push(stopien);
			this.srednia = 0;
			for (let i = 0; i < this.oceny.length; i++){
				this.srednia += this.oceny[i].wartosc;
			}
			this.srednia = this.srednia / this.oceny.length;
		}			
	}
//-------------------12.4---------
	this.getOcena = function(){
		let temp = "";
		for (let i = 0; i < this.oceny.length; i++){
				temp += "Przedmiot: " + this.oceny[i].przedmiot + " - ocena " + this.oceny[i].wartosc + ". ";
			}
		return temp;
	}
}

