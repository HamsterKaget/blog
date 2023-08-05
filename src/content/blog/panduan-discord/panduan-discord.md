---
author: Radja Aulia Al Ramdani
pubDatetime: 2023-08-1T12:00:00+07:00
title: Panduan Server Discord Hamster Kaget Studio
postSlug: panduan-discord
featured: false
draft: false
tags:
  - discord
ogImage: ""
description: Sebuah panduan discord untuk para buyer Hamster Kaget Studio.
---

Hi, selamat datang di panduan discord. di postingan ini gw bikin panduan untuk para pembeli jasa gw di shopee, discord ataupun tempt lainnya, lu bisa bookmark url ini buat pegangan kedepannya.

tambahan lagi jika ada hal yang ga gw cover di panduan ini, lu bisa googling dulu sendiri kalau masih stuck baru bisa tanya gw di discord, karena mau bagaimanapun gw bukan ensiklopedia yang tau segalanya ya, ty pengertiannya 🙏.

## Table of contents

## Manipulasi Server

Pertama gw pengen bahas mengenai Manipulasi Server, kita bahas gimana cara buat channel baru ataupun edit channel yang sudah ada.

### Membuat Channel Baru

untuk menambah text channel baru gw rekomendasiin buat clone channel aja yang sudah ada sekarang. kenapa ? karena biar si permission nya sama dan servernya akan tetep jalan tanpa gangguan.

#### PC / Dekstop

bagi lu yang di pc tinggal klik kanan di salah satu channel yang lu mau clone dan pilih Duplicate channel.

![Duplicate Channel PC](https://cdn.discordapp.com/attachments/1047771756817043496/1137230382429913188/image.png)

#### Mobile

Bagi yang di perangkat mobile lu bisa klik yang lama di salah satu channel dan pilih Duplicate Channel
![Duplicate Channel PC](https://cdn.discordapp.com/attachments/1047771756817043496/1137231170065670175/Screenshot_2023-08-05-10-50-21-89_572064f74bd5f9fa804b05334aa4f912.jpg)

### Membuat Category Baru

untuk membuat category baru lu bisa langsung bikin aja pakai cara normal kaya biasa.

#### PC / Dekstop

bagi lu yang di pc klik kiri nama server nya yang ada di pojok kiri atas kemudian pilih Create Category
![Buat Category PC](https://cdn.discordapp.com/attachments/1047771756817043496/1137233410327318558/image.png)

#### Mobile

bagi lu yang di mobile buka navigasi server kemudian klik nama server nya nanti akan muncul menu untuk moderasi server kemudian klik Create Channel
![Buat Category PC](https://cdn.discordapp.com/attachments/1047771756817043496/1137233401800302705/Screenshot_2023-08-05-10-56-31-08_572064f74bd5f9fa804b05334aa4f912.jpg)

---

## Basic Command

selanjutnya gw pengen bahas mengenai basic command bot bot yang ada di server yang gw buat, perlu diingat gw pakai berbagai jenis bot seperti yang lu bisa liat sendiri, dan gw sendiri bisa cakap menggunakan bot bot tersebut karena memang gw pake discord dari tahun 2017 dan bagi lu yang baru pake discord belum sebulan atau bahkan lebih pendek dari itu, intinya sabar aja, jangan buru buru buat pengen tau segalanya, ga ada yang bisa jago dalam semalam.

### Moderation Command

Pertama kita masuk ke bagian moderasi, moderasi itu apa ? singkatnya moderasi itu adalah cara lu untuk ngatur kelakuan para member di server discord lu, jadi disini lu bisa mute member yang toxic, kick / ban member yang ngelanggar peraturan server lu, dan masih banyak lainnya.

dan untuk moderasi server agar lebih mudah gw fokusin pake bot [Carl](https://carl.gg), dan untuk command nya lu bisa pake slash command [ / ] atau lu juga bisa pake prefix bot nya yaitu tanda seru [ ! ].

untuk command - command yang bisa lu pake adalah sebagai berikut :

#### Mute Member

mute member digunakan untuk membisukan si member yang dituju jadi si member yang kena mute ga akan bisa chatingan di server discord lu lagi selama lu ga nge unmute si member tersebut, untuk command nya adalah sebagai berikut :

```
command :
/moderation mute [member]

contoh :
/moderation mute @HamsterKaget
```

parameter [member] lu ganti dengan nama / nick member yang mau lu mute.

#### Kick Member

Kick member digunakan untuk mengeluarkan member dari server kita tapi dengan catatan dia masih bisa masuk lagi ke server kita kalau dia diinvite, jadi ibaratnya cuman temporary doang si member kita keluarin dari server, untuk command nya adalah sebagai berikut :

```
command :
/moderation kick [member]

contoh :
/moderation kick @HamsterKaget
```

parameter [member] lu ganti dengan nama / nick member yang mau lu mute.

#### Ban Member

Ban Member digunakan untuk mengeluarkan member dari server kita secara permanen sampai kita bolehin dia masuk ke server lagi dengan meng-unban member tersebut. member yang terkena ban dia akan otomatis keluar dari server dan ga akan bisa masuk lagi ke dalam server, untuk command nya adalah sebagai berikut :

```
command :
/moderation ban [member]

contoh :
/moderation ban @HamsterKaget
```

parameter [member] lu ganti dengan nama / nick member yang mau lu mute.

#### Unban Member

unban member digunakan untuk membolehkan kembali member yang sudah kita ban untuk masuk ke dalam server, untuk command nya adalah sebagai berikut :

```
command :
/moderation unban [member]

contoh :
/moderation unban @HamsterKaget
```

parameter [member] lu ganti dengan nama / nick member yang mau lu mute.

---

### Music Command

Terakhir gw pengen bahas mengenai Music, jadi di semua server yang gw buat selalu gw sediain minimal 3 bot music dan semua bot music untuk saat ini sudah menggunakan slash command jadi lu bisa pake garis miring [ / ] untuk ngegunain si bot music nya. lu bebas mau pakai bot music yang mana tapi intinya pakai bot music yang lagi ga dipake sama member lain, kalau misal lu liat ada orang lain di voice channel lagi pake bot music A, ya lu pakenya bot music B biar ga bentrok. harusnya sih pembeli gw pinter semua jadi ngerti masalah beginian

#### Catatan

- Untuk bisa menggunakan bot music lu harus udh join dulu ke salah satu voice channel baru tulisin command nya.
- Untuk bot Jockie Music prefix yang dia gunakan adalah [ m! ] jadi tinggal ganti [ / ] dengan [ m! ]

#### Play Music

untuk mulai menggunakan bot music lu bisa menggunakan command seperti berikut :

```
command :
/play [judul-lagu]

contoh :
/play indonesia-raya
```

catatan :

- untuk lagu yang tersedia biasanya diambil dari platform seperti sportify, jadi kalau misal lu play lagu yang ibaratnya baru ada di youtube harusnya ga akan works. bukan salah lu ataupun bot nya, beberapa library yang digunakan developer untuk membuat bot music sudah ga mensupport lagi youtube karena beberapa alasan.
- kalau lu play lebih dari satu lagu, lagu nya nanti otomatis diputar sesuai urutan

#### Pause Music

kalau misal ditengah jalan lu mau pause dulu musicnya karena beberapa hal lu bisa pake command sebagai berikut :

```
command :
/pause
```

#### Resume Music

kalau pause nya sudah selesai dan pengen lanjut lagi denger musicnya lu bisa pake command berikut :

```
command :
/resume
```

#### Skip Music

Kalau lu mau skip lagu saat ini, lu bisa pakai command berikut :

```
command :
/skip
```

maka otomatis nanti lagu selanjutnya dalam antrian akan diputar

#### Stop Music

kalau lu pengen stop semua lagu saat ini (termasuk semua lagu dalam antrian / urutan) lu bisa pakai command berikut :

```
command :
/stop
```

---

ya gw rasa untuk saat ini panduannya cukup sampai disini, akan gw update kalau ada yang kurang tapi berprogress ya karena membuat semua panduan ini butuh waktu dan kesibukan gw bukan cuman disini doang jadi mohon maaf jika updatenya lama ataupun ada kata kata gw yang kurang enak, ty banget sekali lagi.

Regards

Radja Aulia Al Ramdani

📅6/17/2023
🕒2:20 AM
