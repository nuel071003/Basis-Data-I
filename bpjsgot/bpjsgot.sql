/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2/5/2024 12:57:11 AM                         */
/*==============================================================*/


drop table if exists APLICARES;

drop table if exists BERANDA;

drop table if exists INFORMASI;

drop table if exists LOG_IN;

drop table if exists PENGUNJUNG;

/*==============================================================*/
/* Table: APLICARES                                             */
/*==============================================================*/
create table APLICARES
(
   DASHBOARD            numeric(5,5) not null,
   ATTRIBUTE_1          char(10),
   ID                   int,
   NAMA                 varchar(254),
   PENCAHARIAN          numeric(5,5),
   REKAPULITASI_FASKES  numeric(4,4),
   KETERSEDIAAN_FASKES  numeric(4,4),
   primary key (DASHBOARD)
);

/*==============================================================*/
/* Table: BERANDA                                               */
/*==============================================================*/
create table BERANDA
(
   ATTRIBUTE_1          char(10) not null,
   PETA_PERLUASAN_AKSES char(10),
   MONITORING           char(10),
   APLICARES            char(10),
   primary key (ATTRIBUTE_1)
);

/*==============================================================*/
/* Table: INFORMASI                                             */
/*==============================================================*/
create table INFORMASI
(
   FSLT_KESEHATAN       char(10) not null,
   USER_MANUAL          longblob,
   HAK_DAN_KWJ_FKTP_FKRTL char(10),
   primary key (FSLT_KESEHATAN)
);

/*==============================================================*/
/* Table: LOG_IN                                                */
/*==============================================================*/
create table LOG_IN
(
   ID                   int not null,
   USERNAME             varchar(255),
   PASSWORD             varchar(255),
   primary key (ID)
);

/*==============================================================*/
/* Table: PENGUNJUNG                                            */
/*==============================================================*/
create table PENGUNJUNG
(
   NAMA                 varchar(254) not null,
   ID                   int,
   ALAMAT               varchar(254),
   primary key (NAMA)
);

alter table APLICARES add constraint FK_KE_EMPAT foreign key (ATTRIBUTE_1)
      references BERANDA (ATTRIBUTE_1) on delete restrict on update restrict;

alter table APLICARES add constraint FK_KE_TIGA foreign key (NAMA)
      references PENGUNJUNG (NAMA) on delete restrict on update restrict;

alter table APLICARES add constraint FK_PERTAMA foreign key (ID)
      references LOG_IN (ID) on delete restrict on update restrict;

alter table PENGUNJUNG add constraint FK_KE_DUA foreign key (ID)
      references LOG_IN (ID) on delete restrict on update restrict;

