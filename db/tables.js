/*create table users (
	id int generated always as identity primary key,
	name varchar(255) not null,
	username varchar(300) not null,
	password varchar(150) not null,
	passwordResetToken varchar(50),
  	passwordResetExpires timestamp,
	admin boolean default false
);

create table arcanus (
	id int GENERATED ALWAYS AS IDENTITY primary key,
	userId int not null,
	char varchar(150) not null,
	class varchar(100) not null,
	chronicle varchar(100) not null,
	xp decimal(15,2) not null,
	background text
);

alter table arcanus add foreign key (userId) references users (id);

create table attributes (
	id int GENERATED ALWAYS AS IDENTITY primary key,
	arcanusId int not null,
	streight decimal(15,2) not null,
	dexterity decimal(15,2) not null,
	life decimal(15,2) not null,
	charisma decimal(15,2) not null,
	manipulation decimal(15,2) not null,
	apearence decimal(15,2) not null,
	perception decimal(15,2) not null,
	intelligence decimal(15,2) not null,
	reasoning decimal(15,2) not null
);

alter table attributes add foreign key (arcanusId) references arcanus (id);

create table skills(
	id int GENERATED ALWAYS AS IDENTITY primary key,
	arcanusId int not null,
	readness decimal(15,2),
	sports decimal(15,2),
	fight decimal(15,2),
	dodge decimal(15,2),
	empath decimal(15,2),
	expression decimal(15,2),
	intimidation decimal(15,2),
	leadership decimal(15,2),
	ruse decimal(15,2),
	lip decimal(15,2),
	animalEmpath decimal(15,2),
	trades decimal(15,2),
	conduction decimal(15,2),
	tag decimal(15,2),
	fireGun decimal(15,2),
	whiteArms decimal(15,2),
	perform decimal(15,2),
	security decimal(15,2),
	stealth decimal(15,2),
	survivor decimal(15,2),
	academic decimal(15,2),
	it decimal(15,2),
	financial decimal(15,2),
	investigation decimal(15,2),
	legal decimal(15,2),
	language decimal(15,2),
	medicine decimal(15,2),
	pagan decimal(15,2),
	government decimal(15,2),
	science decimal(15,2)
);

alter table skills add foreign key (arcanusId) references arcanus (id);

create table magicaes(
	id int GENERATED ALWAYS AS IDENTITY primary key,
	arcanusId int not null,
	magicae varchar(150) not null,
	val decimal(15,2)
);

alter table magicaes add foreign key (arcanusId) references arcanus (id);

create table others(
	id int GENERATED ALWAYS AS IDENTITY primary key,
	arcanusId int not null,
	sanity decimal(15,2),
	mana decimal(15,2),
	lifePoints decimal(15,2),
	bruised boolean default false,
	hurted boolean default false,
	injured boolean default false,
	seriously boolean default false,
	beaten boolean default false,
	crippled boolean default false,
	incapacitated boolean default false,
	unconscious boolean default false
);

alter table others add foreign key (arcanusId) references arcanus (id);

create table grimoire(
	id int GENERATED ALWAYS AS IDENTITY primary key,
	arcanusId int not null,
	animaMentia decimal(15,2),
	acquaDefensia decimal(15,2),
	ignisPotentia decimal(15,2),
	terraeResistentia decimal(15,2),
	ariaLiteratus decimal(15,2)
);

alter table grimoire add foreign key (arcanusId) references arcanus (id);

create table notes (
	id int GENERATED ALWAYS AS IDENTITY primary key,
	arcanusId int not null,
	notes text
);

alter table notes add foreign key (arcanusId) references arcanus (id);*/