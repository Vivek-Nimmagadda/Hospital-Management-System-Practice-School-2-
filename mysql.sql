create database VSGH;
use database VSGH;

create table users (name varchar(200) primary key, email varchar(200) not null, comments varchar(100), fname varchar(30), lname varchar(30), admission_dt varchar(10), discharge_dt varchar(10), patient_regn_no varchar(20), review_required varchar(30), review_required_days varchar(30), ds_file_name varchar(30), ds_summary_file varchar(20), ref_no varchar(30), doctor_name varchar(30), specialization varchar(30), advice varchar(30));

insert into users value('vivek', 'viveknimmagadda@gmail.com', 'Hai! How are you.', 'muripa', 'uppaluri', '20-10-1997', '22-10-1998', '15B00288', 'yes', '2', 'X and Y', 'Xerneas', '2', 'sumanth', 'PhD', 'Akshay va!');

select * from users;

