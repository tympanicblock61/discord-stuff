async function customPrompt(params) {
    var func = params[1]
    var params = params[0]
    var old_output = window.output
    var returns = []
    var mainDiv = document.createElement("div")
    mainDiv.id = "prompt_box"
    mainDiv.style.width = "300px"
    mainDiv.style.height = "300px"
    mainDiv.style.border = "1px solid black"
    mainDiv.style.position = "fixed"
    mainDiv.style.backgroundColor = "black"
    mainDiv.style.textAlign = "center"
    mainDiv.style.top = "50%"
    mainDiv.style.left = "50%"
    mainDiv.style.transform = "translate(-50%, -50%)"
    for (var i=0; i<params.length; i++) {
        var input = document.createElement("input")
        if (params[i].type === "text") {
            input.type = "text"
            console.log("text")
        } else if (params[i].type === "check") {
            input.type = "checkbox"
            console.log("check")
        }
        if (params[i].text !== null) {
            var label = document.createElement("h1")
            label.innerHTML = params[i].text
            label.style.position = "relative"
            label.style.top = "50px"
            label.style.fontSize = "10px"
            label.style.color = "white"
            mainDiv.append(label)
        }
        input.style.top = "50px"
        input.style.position = "relative"
        input.name = i
        mainDiv.append(input)
    }
    var submit = document.createElement("button")
    submit.style.top = "50px"
    submit.style.position = "relative"
    submit.innerHTML = "submit"
    submit.style.fontSize = "10px"
    submit.onclick = function() {
        for (var i=0; i<params.length; i++) {
            var item = document.getElementsByName(i)
            if (item[0].type === "checkbox") {
                console.log(item[0].checked)
                returns.push(item[0].checked)
            }
            else if (item[0].type === "text") {
                console.log(item[0].value)
                returns.push(item[0].value)
            }
        }
        document.getElementById("prompt_box").remove()
        window.output = {id:randomInt(6), o:returns}
    }
    mainDiv.append(submit)
    document.body.append(mainDiv)
    function wait_till() {
        if (window.output === old_output) {
            window.setTimeout(wait_till, 100)
        } else {
            func.call(this, window.output)
        }
    }
    wait_till()
}

function buildButton(params, funcs) {
    var button = document.createElement("button")
    button.style.color = "white"
    button.style.backgroundColor = "black"
    button.style.fontSize = "10px"
    button.innerHTML = params.n
    button.style.width = `${params.w}px`
    button.style.height = `${params.h}px`
    button.style.position = "relative"
    button.onclick = function() {
        if (funcs.p !== null) {
            funcs.f.call(this, funcs.p)
        }
        else {
            funcs.f.call(this)
        }
    }
    return button
}

// category class containerDefault-3TQ5YN
// channel class containerDefault-YUSmu3
// channels div document.getElementsByClassName("content-2a4AW9")[0]


window.discordToken = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken()

document.getElementsByClassName("wordmarkWindows-2dq6rw wordmark-2u86JB")[0].remove()

var mainDiv = document.createElement("div")
mainDiv.style.textAlign = "left"
mainDiv.append(buildButton({w:"50", h:"40", n:"lmao woks"}, {f:function(e) {console.log(e)}, p:"test"}))
document.body.append(mainDiv)

function itemInList(item, list) {
    for (i=0; i<list.length; i++) {
        if (list[i] == item) {
            return true
        }
    }
    return false
}

function randomInt(len) {
    var new_num = ''
    for (i=0; i<len; i++) {
        var num = Math.floor(Math.random() * 10)
        new_num += JSON.stringify(num)
    }
    if (new_num[0] === "0") {
        new_num = JSON.stringify(Math.floor(Math.random() * 10))+new_num.substr(1)
    }
    return parseInt(new_num)
}

function hiddenChannels(guild) {
    var channelNames = []
    var channels = document.getElementsByClassName("content-2a4AW9")[0].getElementsByClassName("containerDefault-YUSmu3")
    for (i=0; i<channels.length; i++) {
        channelNames.push(channels[i].getAttribute("data-dnd-name"))
    }

    let xhr = new XMLHttpRequest()
    xhr.open('GET', `https://discord.com/api/guilds/${guild}/channels`, true)
    xhr.setRequestHeader("authorization", (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken())
    xhr.send()
    xhr.onreadystatechange = processRequest
    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText)
            console.log(response)
            var Channels = document.getElementsByClassName("content-2a4AW9")[0]
            var customCategory = document.createElement("li")
            customCategory.setAttribute("class" ,"containerDefault-3TQ5YN")
            customCategory.setAttribute("data-dnd-name", "Custom")
            customCategory.setAttribute("draggable", "true")
            var div1 = document.createElement("div")
            div1.setAttribute("class", "iconVisibility-3pLDEs wrapper-1S43wv wrapperCommon-I1TMDb clickable-2AoIYN")
            var div2 = document.createElement("div")
            div2.setAttribute("class", "mainContent-uDGa6R")
            div2.setAttribute("tabindex", "-1")
            div2.setAttribute("data-list-item-id", `channels___${randomInt(18)}`)
            div2.setAttribute("aria-label", "custom (category)")
            div2.setAttribute("aria-expanded", "true")
            div2.setAttribute("role", "button")
            var div3 = document.createElement("div")
            div3.setAttribute("class", "children-3MeUvj")
            var h31 = document.createElement("h3")
            h31.setAttribute("class", "name-3BUDLf container-q97qHp")
            var div4 = document.createElement("div")
            div4.setAttribute("class", "overflow-1wOqNV")
            div4.innerHTML = "Custom"
            var svg = document.createElement("svg")
            svg.setAttribute("class", "arrow-2HswgU icon-3zI3d2")
            svg.setAttribute("width", "24")
            svg.setAttribute("height", "24")
            svg.setAttribute("viewBox", "0 0 24 24")
            var path = document.createElement("path")
            path.setAttribute("fill", "currentColor")
            path.setAttribute("fill-rule", "evenodd")
            path.setAttribute("clip-rule", "evenodd")
            path.setAttribute("d", "M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z")
            svg.append(path)
            h31.append(div4)
            div2.append(svg)
            div2.append(h31)
            div1.append(div2)
            div1.append(div3)
            customCategory.append(div1)
            Channels.append(customCategory)
            for (i=0; i<response.length; i++) {
                if (response[i].type == 0 || response[i].type == 2 || response[i].type == 11 || response[i].type == 12) {
                    if (!itemInList(response[i].name, channelNames)) {
                        var channel = document.createElement("li")
                        channel.setAttribute("class", "containerDefault-YUSmu3")
                        channel.setAttribute("data-dnd-name", response[i].name.toLowerCase())
                        var div1 = document.createElement("div")
                        div1.setAttribute("class", "iconVisibility-vptxma wrapper-NhbLHG modeUnread-3Cxepe")
                        var div2 = document.createElement("div")
                        div2.setAttribute("class", "unread-36eUEm unreadRelevant-2f-VSK")
                        var div3 = document.createElement("div")
                        div3.setAttribute("class", "content-1gYQeQ")
                        var a1 = document.createElement("a")
                        a1.setAttribute("href", `/channels/${guild}/${response[i].id}`)
                        a1.setAttribute("class", "mainContent-20q_Hp")
                        a1.setAttribute("data-list-item-id", `channels___${response[i].id}`)
                        a1.setAttribute("tabindex", "-1")
                        a1.setAttribute("aria-label", `${JSON.stringify(response[i].name)} (text channel)`)
                        var div4 = document.createElement("div")
                        div4.setAttribute("class", "name-28HaxV overflow-1wOqNV")
                        div4.setAttribute("aria-hidden", "true")
                        var div5 = document.createElement("div")
                        div5.setAttribute("class", "channelName-3KPsGw")
                        div5.innerHTML = response[i].name

                        div4.append(div5)
                        a1.append(div4)
                        div2.append(a1)
                        div1.append(div3)
                        div1.append(div2)
                        channel.append(div1)
                        Channels.append(channel)
                    }
                }
            }
        }
    }
}