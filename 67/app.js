/*  Ders Ortlaması  */
// vize1 %30, vize2 %30, final %40

// Notlar
let vize1 = Number(prompt("Vize1 notunuzu giriniz."));
let vize2 = Number(prompt("Vize2 notunuzu giriniz"));
let final = Number (prompt("Final notunuzu giriniz"));

// Ortalama
let ortalama =(vize1*0.3) + (vize2*0.3) + (final*0.4);
if(ortalama>=60){
    document.writeln("Tebrikler Mezun oldunuz!");
    console.log("Ortalamanız : " + ortalama);
}else{
    document.writeln("Üzgünüz ortalamanız yeterli değil, mezun olamadınız...");
    console.log("Ortalamanız : " + ortalama)
}