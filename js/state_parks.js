var stateParksInfo = [
	{
		name: "Red Top Mountain State Park", 
		url: "http://gastateparks.org/RedTopMountain",
		latLng: {
			lat: 34.154609,
			lng: -84.702991
		},
		dir: 'https://www.google.com/maps/dir//Red+Top+Mountain+State+Park+%26+Lodge,+50+Lodge+Road+Southeast,+Cartersville,+GA+30121/@34.154609,-84.702991,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f544140d4ac7a9:0xff6e84695e10d4bc!2m2!1d-84.702991!2d34.154609'
	}, 
	{
		name: "Amicalola Falls State Park", 
		url: "http://gastateparks.org/AmicalolaFalls",
		latLng: {
			lat: 34.576187,
			lng: -84.236007
		},
		dir: 'https://www.google.com/maps/dir//Amicalola+Falls+State+Park+%26+Lodge,+Amicalola+Falls+Lodge+Road,+Dawsonville,+GA/@34.5654128,-84.2427109,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885f7792a0e02d17:0xcf6a81f76f7c3349!2m2!1d-84.2427109!2d34.5654128'
	}, 
	{
		name: "Fort Yargo State Park", 
		url: "http://gastateparks.org/FortYargo",
		latLng: {
			lat: 33.970762,
			lng: -83.728750
		},
		dir: 'https://www.google.com/maps/dir//Fort+Yargo+State+Park,+South+Broad+Street,+Winder,+GA/@33.970762,-83.72875,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f5dd0d64957945:0x75bb1b3ffbb840cd!2m2!1d-83.72875!2d33.970762'
	}, 
	{
		name: "Don Carter State Park", 
		url: "http://gastateparks.org/doncarter",
		latLng: {
			lat: 34.390651,
			lng: -83.749130
		},
		dir: 'https://www.google.com/maps/dir//Don+Carter+State+Park,+North+Browning+Bridge+Road,+Gainesville,+GA/@34.39065,-83.749129,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885f579c2ec91103:0xc440da84bebf923d!2m2!1d-83.749129!2d34.39065'
	}, 
	{
		name: "High Falls State Park", 
		url: "http://gastateparks.org/HighFalls",
		latLng: {
			lat: 33.178813,
			lng: -84.019598
		},
		dir: 'https://www.google.com/maps/dir//High+Falls+State+Park,+High+Falls+Park+Drive,+Jackson,+GA/@33.178813,-84.019598,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f46c202a26f1b9:0x4dc8bd60bd556d96!2m2!1d-84.019598!2d33.178813'
	}, 
	{
		name: "Chattahoochee Bend State Park", 
		url: "http://gastateparks.org/ChattahoocheeBend",
		latLng: {
			lat: 33.429877,
			lng: -84.989555
		},
		dir: 'https://www.google.com/maps/dir//Chattahoochee+Bend+State+Park,+Coweta+County,+GA/@33.429876,-84.989554,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x888b337888430a0b:0x43c7f52d36b49c37!2m2!1d-84.989554!2d33.429876'
	}, 
	{
		name: "Indian Springs State Park", 
		url: "http://gastateparks.org/IndianSprings",
		latLng: {
			lat: 33.247446,
			lng: -83.922138
		},
		dir: 'https://www.google.com/maps/dir//Indian+Springs+State+Park,+Lake+Clark+Road,+Flovilla,+GA/@33.4689679,-84.1358554,8z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f4152acc237f47:0x8da3d61e9f5060e1!2m2!1d-83.922137!2d33.247446'
	}, 
	{
		name: "Hard Labor Creek State Park", 
		url: "http://gastateparks.org/HardLaborCreek",
		latLng: {
			lat: 33.663130,
			lng: -83.601483
		},
		dir: 'https://www.google.com/maps/dir//Hard+Labor+Creek+State+Park,+Hard+Labor+Creek+Road,+Rutledge,+GA/@33.663129,-83.601483,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f5d5611b904829:0x84ab2ec7336d034f!2m2!1d-83.601483!2d33.663129'
	}, 
	{
		name: "Fort Mountain State Park", 
		url: "http://gastateparks.org/FortMountain",
		latLng: {
			lat: 34.761263,
			lng: -84.702817
		},
		dir: 'https://www.google.com/maps/dir//Fort+Mountain+State+Park,+Fort+Mountain+State+Park+Road,+Chatsworth,+GA/@34.761262,-84.702817,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885fc217054d4fb1:0x3c2c267a74ad7cee!2m2!1d-84.702817!2d34.761262'
	}, 
	{
		name: "Unicoi State Park", 
		url: "http://gastateparks.org/Unicoi",
		latLng: {
			lat: 34.715013,
			lng: -83.727883
		},
		dir: 'https://www.google.com/maps/dir//Unicoi+State+Park+%26+Lodge,+Georgia+356,+Helen,+GA/@34.715013,-83.727883,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885f37c8325fbb7b:0xcd5d11c4a1e13ee!2m2!1d-83.727883!2d34.715013'
	}, 
	{
		name: "Vogel State Park", 
		url: "http://gastateparks.org/Vogel",
		latLng: {
			lat: 34.767037,
			lng: -83.919707
		},
		dir: 'https://www.google.com/maps/dir//Vogel+State+Park,+Vogel+State+Park+Road,+Blairsville,+GA/@34.767036,-83.919706,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885f3e2ee479b9c3:0xbaff9926bf33116b!2m2!1d-83.919706!2d34.767036'
	}, 
	{
		name: "Moccasin Creek State Park", 
		url: "http://gastateparks.org/MoccasinCreek",
		latLng: {
			lat: 34.844748,
			lng: -83.587524
		},
		dir: 'https://www.google.com/maps/dir//Moccasin+Creek+State+Park,+Rabun+County,+GA/@34.8429928,-83.5883697,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8858cac69b271777:0x30c166888620c80d!2m2!1d-83.5883697!2d34.8429928'
	}, 
	{
		name: "F.D. Roosevelt State Park", 
		url: "http://gastateparks.org/FDRoosevelt",
		latLng: {
			lat: 32.863545,
			lng: -84.718495
		},
		dir: 'https://www.google.com/maps/dir//F.D.+Roosevelt+State+Park,+Georgia+190,+Pine+Mountain,+GA/@32.863544,-84.718494,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f350f949fcf1f9:0x8ad67ffb2ba08a02!2m2!1d-84.718494!2d32.863544'
	}, 
	{
		name: "James H. (Sloppy) Floyd State Park", 
		url: "http://gastateparks.org/JamesHFloyd",
		latLng: {
			lat: 34.433725,
			lng: -85.336881
		},
		dir: ''
	}, 
	{
		name: "Watson Mill Bridge State Park", 
		url: "http://gastateparks.org/WatsonMillBridge",
		latLng: {
			lat: 34.026052,
			lng: -83.073418
		},
		dir: 'https://www.google.com/maps/dir//James+H.+(Sloppy)+Floyd+State+Park,+Sloppy+Floyd+Lake+Road,+Summerville,+GA/@34.433725,-85.336881,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x886020bc7f91e095:0x607fb9fe1407d74c!2m2!1d-85.336881!2d34.433725'
	}, 
	{
		name: "Tallulah Gorge State Park", 
		url: "http://gastateparks.org/TallulahGorge",
		latLng: {
			lat: 34.740122,
			lng: -83.390468
		},
		dir: 'https://www.google.com/maps/dir//Tallulah+Gorge+State+Park,+Jane+Hurt+Yarn+Road,+Tallulah+Falls,+GA/@34.740122,-83.390468,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x8858c6fec0b2e6a1:0x121373585bc0f494!2m2!1d-83.390468!2d34.740122'
	}, 
	{
		name: "Victoria Bryant State Park", 
		url: "http://gastateparks.org/VictoriaBryant",
		latLng: {
			lat: 34.301110,
			lng: -83.159789
		},
		dir: 'https://www.google.com/maps/dir//Victoria+Bryant+State+Park,+Bryant+Park+Road,+Royston,+GA/@34.3011099,-83.1597892,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f620b47d623c11:0x165fd61e2e1878f4!2m2!1d-83.1597892!2d34.3011099'
	}, 
	{
		name: "Tugaloo State Park", 
		url: "http://gastateparks.org/Tugaloo",
		latLng: {
			lat: 34.494178,
			lng: -83.063765
		},
		dir: ''
	}, 
	{
		name: "Black Rock Mountain State Park", 
		url: "http://gastateparks.org/BlackRockMountain",
		latLng: {
			lat: 34.907071,
			lng: -83.408314
		},
		dir: 'https://www.google.com/maps/dir//Black+Rock+Mountain+State+Park,+3085+Black+Rock+Mountain+Pkwy,+Mountain+City,+GA+30562/@34.90707,-83.408313,17z/data=!4m13!1m4!3m3!1s0x8858da7ad56b9ff3:0x5b82469728afbe69!2sBlack+Rock+Mountain+State+Park!3b1!4m7!1m0!1m5!1m1!1s0x8858da7ad56b9ff3:0x5b82469728afbe69!2m2!1d-83.408313!2d34.90707'
	}, 
	{
		name: "A.H. Stephens State Park", 
		url: "http://gastateparks.org/AHStephens",
		latLng: {
			lat: 33.561999,
			lng: -82.895489
		},
		dir: 'https://www.google.com/maps/dir//A.+H.+Stephens+State+Park,+Crawfordville,+GA/@33.561998,-82.895489,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f7003d6829b251:0xddefc7772d5ccd8c!2m2!1d-82.895489!2d33.561998'
	}, 
	{
		name: "Cloudland Canyon State Park", 
		url: "http://gastateparks.org/CloudlandCanyon",
		latLng: {
			lat: 34.824549,
			lng: -85.483259
		},
		dir: 'https://www.google.com/maps/dir//Cloudland+Canyon+State+Park,+Cloudland+Canyon+Park+Road,+Rising+Fawn,+GA/@34.824548,-85.483259,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x886048e2f9d4018f:0x3b8806f39ac42a2a!2m2!1d-85.483259!2d34.824548'
	}, 
	{
		name: "Richard B. Russell State Park", 
		url: "http://gastateparks.org/RichardBRussell",
		latLng: {
			lat: 34.178065,
			lng: -82.761358
		},
		dir: ''
	}, 
	{
		name: "Bobby Brown Recreation Area", 
		url: "http://gastateparks.org/BobbyBrown",
		latLng: {
			lat: 34.029522,
			lng: -82.622208
		},
		dir: 'https://www.google.com/maps/dir//Richard+B.+Russell+State+Park,+Russell+State+Park+Drive,+Elberton,+GA/@34.178065,-82.761357,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f7d088b246bf0b:0xfdbc9e539dbaefe!2m2!1d-82.761357!2d34.178065'
	}, 
	{
		name: "Hart State Recreation Area", 
		url: "http://gastateparks.org/Hart",
		latLng: {
			lat: 34.379501,
			lng: -82.911158
		},
		dir: 'https://www.google.com/maps/dir//Hart+State+Outdoor+Recreation+Area,+Hart+State+Park+Road,+Hartwell,+GA/@34.379515,-82.911293,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x885880a6152d185d:0x6d0d1533a0cd7bec!2m2!1d-82.911293!2d34.379515'
	}, 
	{
		name: "Hamburg State Recreation Area", 
		url: "http://gastateparks.org/Hamburg",
		latLng: {
			lat: 33.209824,
			lng: -82.791510
		},
		dir: 'https://www.google.com/maps/dir//Hamburg+State+Park/@33.2278489,-82.7741511,13.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x0:0x5892ae99e1bb0c5b!2m2!1d-82.7915096!2d33.2098239'
	}, 
	{
		name: "Florence Marina State Park", 
		url: "http://gastateparks.org/FlorenceMarina",
		latLng: {
			lat: 32.091065,
			lng: -85.041367
		},
		dir: 'https://www.google.com/maps/dir//Florence+Marina+State+Park,+Omaha,+GA/@32.091065,-85.041367,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x888d2e161f1a0d91:0x61cdc8b2705e6018!2m2!1d-85.041367!2d32.091065'
	}, 
	{
		name: "Elijah Clark State Park", 
		url: "http://gastateparks.org/ElijahClark",
		latLng: {
			lat: 33.851314,
			lng: -82.396087
		},
		dir: 'https://www.google.com/maps/dir//Elijah+Clark+State+Park,+Lincoln+County,+GA/@33.851314,-82.396087,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f7926cfcbf3edb:0xeaf644184f519314!2m2!1d-82.396087!2d33.851314'
	}, 
	{
		name: "Georgia Veterans State Park", 
		url: "http://gastateparks.org/GeorgiaVeterans",
		latLng: {
			lat: 31.958425,
			lng: -83.898210
		},
		dir: 'https://www.google.com/maps/dir//Georgia+Veterans+State+Park,+U.S.+280,+Cordele,+GA/@31.958425,-83.89821,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f238c2189c26e3:0x4c7cf1a0c81191e3!2m2!1d-83.89821!2d31.958425'
	}, 
	{
		name: "Mistletoe State Park", 
		url: "http://gastateparks.org/Mistletoe",
		latLng: {
			lat: 33.645994,
			lng: -82.379798
		},
		dir: ''
	}, 
	{
		name: "Little Ocmulgee State Park", 
		url: "http://gastateparks.org/LittleOcmulgee",
		latLng: {
			lat: 32.091591,
			lng: -82.884764
		},
		dir: 'https://www.google.com/maps/dir//Mistletoe+State+Park,+Appling,+GA/@33.645994,-82.379798,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f784a7c2ab0f0b:0xc70c43ef3f01b85e!2m2!1d-82.379798!2d33.645994'
	}, 
	{
		name: "Magnolia Springs State Park", 
		url: "http://gastateparks.org/MagnoliaSprings",
		latLng: {
			lat: 32.880682,
			lng: -81.956120
		},
		dir: 'https://www.google.com/maps/dir//Magnolia+Springs+State+Park,+Millen,+GA/@32.880682,-81.95612,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f9f69ef73743c1:0xf782b901630a642b!2m2!1d-81.95612!2d32.880682'
	}, 
	{
		name: "George L. Smith State Park", 
		url: "http://gastateparks.org/GeorgeLSmith",
		latLng: {
			lat: 32.558553,
			lng: -82.119676
		},
		dir: 'https://www.google.com/maps/dir//George+L.+Smith+State+Park,+George+L+Smith+State+Park+Road,+Twin+City,+GA/@32.558552,-82.119676,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88fa0bed69e9a70b:0x7fc6b1dd338a0190!2m2!1d-82.119676!2d32.558552'
	}, 
	{
		name: "Kolomoki Mounds State Park", 
		url: "http://gastateparks.org/KolomokiMounds",
		latLng: {
			lat: 31.468422,
			lng: -84.938351
		},
		dir: ''
	}, 
	{
		name: "Gordonia-Alatamaha State Park", 
		url: "http://gastateparks.org/GordoniaAlatamaha",
		latLng: {
			lat: 32.092086,
			lng: -82.136003
		},
		dir: 'https://www.google.com/maps/dir//Kolomoki+Mounds+Historic+Park,+Indian+Mounds+Road,+Blakely,+GA/@31.468421,-84.93835,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88ed54cf483c1093:0x88af7f69f9bdd353!2m2!1d-84.93835!2d31.468421'
	}, 
	{
		name: "Reed Bingham State Park", 
		url: "http://gastateparks.org/ReedBingham",
		latLng: {
			lat: 31.160925,
			lng: -83.537206
		},
		dir: 'https://www.google.com/maps/dir//Reed+Bingham+State+Park,+Reed+Bingham+Road,+Adel,+GA/@31.160925,-83.537206,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88ee0bc2f87b7f11:0xd730a97e908167ad!2m2!1d-83.537206!2d31.160925'
	}, 
	{
		name: "General Coffee State Park", 
		url: "http://gastateparks.org/GeneralCoffee",
		latLng: {
			lat: 31.523863,
			lng: -82.769770
		},
		dir: 'https://www.google.com/maps/dir//General+Coffee+State+Park,+John+Coffee+Road,+Nicholls,+GA/@31.523863,-82.76977,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88f02f2c04dcb3b5:0x8d95f92de2b73332!2m2!1d-82.76977!2d31.523863'
	}, 
	{
		name: "Seminole State Park", 
		url: "http://gastateparks.org/Seminole",
		latLng: {
			lat: 30.809532,
			lng: -84.877882
		},
		dir: 'https://www.google.com/maps/dir//Seminole+State+Park,+State+Park+Road,+Donalsonville,+GA/@30.809532,-84.877882,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88ed2a0d4c05a7e1:0xdccc66fd9e0860e7!2m2!1d-84.877882!2d30.809532'
	}, 
	{
		name: "Laura S. Walker State Park", 
		url: "http://gastateparks.org/LauraSWalker",
		latLng: {
			lat: 31.142320,
			lng: -82.216446
		},
		dir: ''
	}, 
	{
		name: "Fort McAllister State Park", 
		url: "http://gastateparks.org/FortMcAllister",
		latLng: {
			lat: 31.883851,
			lng: -81.178923
		},
		dir: 'https://www.google.com/maps/dir//Laura+S.+Walker+State+Park,+Ware+County,+GA/@31.142319,-82.216446,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88e5589e470b80c7:0x3c9a5f89ec7f4a03!2m2!1d-82.216446!2d31.142319'
	}, 
	{
		name: "Stephen C. Foster State Park", 
		url: "http://gastateparks.org/StephenCFoster",
		latLng: {
			lat: 30.821916,
			lng: -82.364845
		},
		dir: 'https://www.google.com/maps/dir//Stephen+C+Foster+State+Park,+Georgia+177,+Fargo,+GA/@30.821916,-82.364845,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88ef85165309a727:0xb75cdd4b79f28478!2m2!1d-82.364845!2d30.821916'
	}, 
	{
		name: "Skidaway Island State Park", 
		url: "http://gastateparks.org/SkidawayIsland",
		latLng: {
			lat: 31.955537,
			lng: -81.05348141
		},
		dir: 'https://www.google.com/maps/dir//Skidaway+Island+State+Park,+Diamond+Causeway,+Savannah,+GA/@31.9556232,-81.0536383,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x88fb76b61aee9483:0xe4976478e06718e6!2m2!1d-81.0536383!2d31.9556232'
	} 
]