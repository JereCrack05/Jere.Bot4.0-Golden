//CΓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li

import { createHash } from 'crypto'
let nombre, edad, genero, registro, _registro

let handler = async function (m, { conn, text, command, usedPrefix }) {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? m.sender : m.sender

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await '.' + ' ' + conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)

if (user.registered === true) throw `${iig}ππΌ ππππΌπ ππππππππΌπΏπ(πΌ)!!\nππ ππππππ πΌππππΌπ ππ ππππππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}unreg numero de serie*\n\nππ ππ πππΎππππΏπΌ ππ ππππππ πΏπ πππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}myns*`

if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg') {
await conn.sendButton(m.chat, iig + 'π *CΓMO DESEA REGISTRARSE?*', '*REGISTRO RAPIDO*\n- Insignia de verificaciΓ³n\n- Desbloquear comandos que requieran registro\n\n*REGISTRO COMPLETO*\n- Insignia de verificaciΓ³n\n- Desbloquear comandos que requieran registro\n- Recompensas por usar este tipo de registro\n- Premium Temporal Gratis\n\n' + wm, null, [[`π REGISTRO RΓPIDO`, usedPrefix + 'Reg1'], [`ποΈ REGISTRO COMPLETO`, usedPrefix + 'nombre']], m) 
}
	
if (command == 'reg1') {
registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2) 

if (!text) return conn.sendButton(m.chat, mg + `*PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\`\n\n*EJEMPLO:* \`\`\`${usedPrefix + command} ${gt} 20\`\`\``, '```CONSEJO:```\n\n- Escriba "Nombre" + "espacio" + "edad"\n- Su nombre no debe de contener nΓΊmeros\n- La edad no debe de contener Letras\n\n*SabΓ­as que puede personalizar mΓ‘s su registro?*\n_Usando el BotΓ³n de abajo_', null, [[`ποΈ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
if (_registro['length'] >= 3 || isNaN(_registro[1])) return conn.sendButton(m.chat, fg + 'π *ESTΓ INTENTANDO SEPRAR SU NOMBRE?* ', 'π§ *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super ${gt} 20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro*\n_Use el BotΓ³n de abajo_', null, [[`π AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/\s+/g, '').replace(/[0-9]+/gi, "") + ' ' + text.replace(/\s+/g, '').replace(/[a-z]+/gi, "")], ['π VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return conn.sendButton(m.chat, fg + `*FALTA SU NOMBRE, PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`ποΈ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
if (_registro[0].length >= 30) throw fg + '*SU NOMBRE ES MUY LARGO, USE OTRO NOMBRE POR FAVOR*' 
if (_registro[0].length <= 2) throw fg + '*SU NOMBRE ES MUY CORTO, USE OTRO NOMBRE POR FAVOR*'
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
nombre = _registro[0]
	
if (!_registro[1]) return conn.sendButton(m.chat, fg + `*FALTA SU EDAD, PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`ποΈ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
//if (isNaN(_registro[1])) throw '*LA EDAD DEBE DE SER SOLO NΓMEROS*'
if (_registro[1] > 50) throw fg + `*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
if (_registro[1] < 10) throw fg + `*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
edad = parseInt(_registro[1]) //_registro[1]	
user.registroR = true
	
await conn.sendButton(m.chat, eg + '*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*β€ NOMBRE:* ' + nombre + '\n' + '*β€ EDAD:* ' + edad + ' aΓ±os', wm, null, [[`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)	
}
		
if (command == 'nombre' || command == 'name') {
if (verificar.test(text) == false || text.length <= 1) return conn.sendButton(m.chat, '*PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*TambiΓ©n puede vincular su nombre de WhatsApp*\n_Usando el BotΓ³n de abajo_', null, [[`π REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2' + ' ' + nombreWA]], m)
if (text.length >= 25) return conn.sendButton(m.chat, '*USE UN NOMBRE MΓS CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2' + ' ' + nombreWA]], m)
if (text.length <= 4) return conn.sendButton(m.chat, '*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2' + ' ' + nombreWA]], m) 

nombre = text.slice(1).replace(/[0-9]+/gi, "").trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre, wm, null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
}
	
if (command == 'nombre2' || command == 'name2') {
if (nombreWA.slice(1).length < 4) return conn.sendButton(m.chat, '*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*SabΓ­as que puede personalizar su nombre?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π PERSONALIZAR REGISTRO`, usedPrefix + 'nombre']], m) 
if (nombreWA.slice(1).length > 25) return conn.sendButton(m.chat, '*USE UN NOMBRE MΓS CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*SabΓ­as que puede personalizar su nombre?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π PERSONALIZAR REGISTRO`, usedPrefix + 'nombre']], m)
nombre = nombreWA.replace(/[0-9]+/gi, "").slice(1).trim()	
	
if (verificar.test(text) == false) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre, wm, null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
}

	
if (command == 'edad' || command == 'age') {
const sections = [
{ title: "π SELECCIONA TU EDAD!!",
rows: [ {title: "β»οΈ Edad Random", rowId: usedPrefix + command + ' ' + usedPrefix +  text + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','31'])}]
}, {
title: "π JOVEN",
rows: [
{title: "1οΈβ£0οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '10'},
{title: "1οΈβ£1οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '11'},
{title: "1οΈβ£2οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '12'},
{title: "1οΈβ£3οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '13'},
{title: "1οΈβ£4οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '14'},
{title: "1οΈβ£5οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '15'},
{title: "1οΈβ£6οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '16'},
{title: "1οΈβ£7οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '17'}]
}, {
title: "π³ ADULTO",
rows: [
{title: "1οΈβ£8οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '18'},
{title: "1οΈβ£9οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '19'},
{title: "2οΈβ£0οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '20'},
{title: "2οΈβ£1οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '21'},
{title: "2οΈβ£2οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '22'},
{title: "2οΈβ£3οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '23'},
{title: "2οΈβ£4οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '24'},
{title: "2οΈβ£5οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '25'},
{title: "2οΈβ£6οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '26'},
{title: "2οΈβ£7οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '27'},
{title: "2οΈβ£8οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '28'},
{title: "2οΈβ£9οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '29'},
{title: "3οΈβ£0οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '30'}]
}, {
title: "π€ NO ESTΓ TΓ EDAD ?",
rows: [
{title: "π’ Personalizar mΓ­ edad", rowId: usedPrefix + 'edad2'}]},]

const listMessage = {
text: `*SELECCIONE SU EDAD POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n\n*β°βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*`,
footer: wm,
title: "*β­βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*\n",
buttonText: "π«΅ SELECCIONAR EDAD π«΅β",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
if (verificar.test(text) == false || !text.slice(1) ) return conn.sendButton(m.chat, '*PERSONALICE SU EDAD PARA REGISTRAR, EJEMPLO:*\n' + usedPrefix + command + ' ' + usedPrefix + '35', '*SabΓ­as que puede seleccionar su edad de una lista ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
if (isNaN(text.slice(1))) throw '*INGRESE SOLO NΓMEROS*'
if (text.slice(1) > 50) throw '*DEMASIADO MAYOR PARA SER REGISTRADO*'
if (text.slice(1) < 10 || text.slice(1) < 0) throw '*DEMASIADO MENOR PARA SER REGISTRADO*'
	
//user.age = text.slice(1) 
edad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os', wm, null, [[`π REGISTRAR MI GΓNERO `, usedPrefix + `genero`]], m)
}
	
if (command == 'edad2' || command == 'age2') {
if (verificar.test(text) == false || !text.slice(1) ) return conn.sendButton(m.chat, '*PERSONALICE SU EDAD PARA REGISTRAR, EJEMPLO:*\n' + usedPrefix + command + ' ' + usedPrefix + '35', '*SabΓ­as que puede seleccionar su edad de una lista ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
if (isNaN(text.slice(1))) throw '*INGRESE SOLO NΓMEROS*'
if (text.slice(1) > 50) throw '*DEMASIADO MAYOR PARA SER REGISTRADO*'
if (text.slice(1) < 10 || text.slice(1) < 0) throw '*DEMASIADO MENOR PARA SER REGISTRADO*'

//user.age = text.slice(1) 
edad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os', wm, null, [[`REGISTRAR MI GΓNERO `, usedPrefix + `genero`]], m)
}

	
if (command == 'genero' || command == 'gΓ©nero' || command == 'gender') {
const sections = [
{ title: "π SELECCIONA TU GΓNERO!!",
title: comienzo + " πΉ MASCULINO " + fin,
rows: [ 
{title: "πΉ Hombre", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Hombre' }]
}, {
title: comienzo + " πΊ FEMENINO " + fin,
rows: [
{title: "πΊ Mujer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Mujer' }]
}, {
title: comienzo + " π€ OCULTAR " + fin,
rows: [
{title: "π€ Ocultado", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Ocultado' }]},]

const listMessage = {
text: `*SELECCIONE SU GΓNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n\n*β°βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*`,
footer: wm,
title: "*β­βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*\n",
buttonText: "π§¬ SELECCIONAR GΓNERO π§¬β",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
user.registroC = true
genero = text.slice(1).trim()	
	
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os' + '\n' + '*GENERO:* ' + genero, wm, null, [[`π FINALIZAR REGISTRO`, usedPrefix + `finalizar`]], m)	 
}
	
if (command == 'finalizar' || command == 'end') {
if (user.registroC == true) {
user.name = nombre 
user.age = edad
user.genero = genero
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 7
global.db.data.users[m.sender].exp += 250
global.db.data.users[m.sender].joincount += 3
	
}else{
user.name = nombre 
user.age = edad 
}
	
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
	
let caption1 = `β­βββ[ *πππππππΎπΌπ | ππππππ* ]βββββ¬£
β *TIPO DE REGISTRO* 
β ${user.registroC == true ? 'REGISTRO COMPLETO' : 'REGISTRO RAPIDO'}
ββββββββββββββββββ
β *NOMBRE* 
β ${user.name} ${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}
ββββββββββββββββββ
β *EDAD* 
β ${user.age} AΓ±os 
ββββββββββββββββββ
β *GΓNERO BIOLΓGICO* 
β ${user.genero}
ββββββββββββββββββ
β *BONO* 
β *$250 XP*
β *$400 GATACOINS*
β *$7 DIAMANTES*
β°βββββββββββββββββββ¬£`.trim()

let caption2 = `
π \`\`\`VERIFICACIΓN EXITOSA\`\`\` π
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*

πΌ *REGISTRADO POR*
β±β± ${wm}

π *TIPO DE REGISTRO* 
β±β± ${user.registroC == true ? 'Registro Completo' : 'Registro RΓ‘pido'}

β *INSIGNIA DE VERIFICACIΓN*
β±β±   *${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}*

π€ *NOMBRE* 
β±β± ${user.name}${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}

π’ *EDAD* 
β±β± ${user.age} AΓ±os *||* ${user.age > 18 ? '(Persona Adulta)' : '(Persona Joven)'}

π *CΓDIGO DE REGISTRO*
β±β± ${sn}
`.trim()

await m.reply('π ```VERIFICANDO DATOS...```')
await conn.sendButton(m.chat, user.registroC == true ? caption1 : caption2, user.registroC == true ? wm : 'Si elimina su registro se eliminara los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu cΓ³digo de serie le permitirΓ‘ borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`) 
}}
handler.command = ['verify', 'verificar', 'register', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'gΓ©nero', 'gender', 'finalizar', 'end']  ///^(verify|verificar|reg(ister)?)$/i
export default handler

/*
import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}ππΌ ππππΌπ ππππππππΌπΏπ(πΌ)!!\nππ ππππππ πΌππππΌπ ππ ππππππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}unreg numero de serie*\n\nππ ππ πππΎππππΏπΌ ππ ππππππ πΏπ πππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = `${pickRandom(['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}`
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
//global.db.data.users[m.sender].money += 1000
//global.db.data.users[m.sender].limit += 15
//global.db.data.users[m.sender].exp += 1500
//global.db.data.users[m.sender].joincount += 5
let caption = `β­βββ[ *πππππππΎπΌπ | ππππππ* ]βββββ¬£
β *NOMBRE* 
β ${name} ${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}
ββββββββββββββββββ
β *EDAD* 
β *${age} aΓ±os*
β°βββββββββββββββββββ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `ππ ππππππ πΏπ πππππ ππ πππππππΌ ππ πΎπΌππ πππ ππππππΌ π½ππππΌπ ππ ππππππππ\nπππππππ\n${usedPrefix}unreg numero de serie\n${wm}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada|verificarme)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
*/
