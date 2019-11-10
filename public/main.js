console.log('我是main.js')
let n = 1
getNext.onclick = ()=>{
    n+=1
    let request = new XMLHttpRequest()
    if(n <= 3){
        request.open('GET', `page${n}`)
        request.onreadystatechange = ()=> {
            if(request.readyState === 4){
                if(request.status >=200 && request.status < 300){
                    let arr = JSON.parse(request.response)
                    arr.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerHTML = item.id
                        xxx.appendChild(li)
                    })
                }
            }
        }
        if(n === 3){
            getNext.style.pointerEvents = 'none'
        }
    }else {
        return
    }
    request.send()
}
getJSON.onclick = ()=> {
    let request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                let jsonObj
                try {
                    jsonObj = JSON.parse(request.response)
                }catch (err){
                    jsonObj = {"name": ''}
                }
                console.log(jsonObj)
            }
        }
    }
    request.send()
}
getXML.onclick = ()=> {
    let request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4) {
            if(request.status >= 200 && request.status < 300){
                let xml = request.responseXML
                let text = xml.getElementsByTagName('warning')[0].textContent.trim()
                console.log(text)
            }
        }
    }
    request.send()
}
getHTML.onclick = ()=>{
    let request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            if(request.status >=200 && request.status < 300) {
                let string = request.response
                let template = document.createElement('template')
                template.innerHTML = string
                document.body.appendChild(template.content.firstElementChild)
            }
        }
    }
    request.send()
}
getJS.onclick = () => {
    let request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if(request.readyState === 4) {
            if(request.status >=200 && request.status < 300) {
                let string = request.response
                let script = document.createElement('script')
                script.innerHTML = string
                document.body.appendChild(script)
            }
        }
    }
    request.send()
}
getCSS.onclick = () => {
    // 1.创建XMLHttpRequest对象
    let request = new XMLHttpRequest()
    // 2.调用对象的open方法
    request.open('GET', '/style.css')
    // 3.监听成功/失败结果
    request.onreadystatechange = () => {
        if(request.readyState === 4){ // 下载成功(可能是请求的失败的下载成功,也可能是请求的成功的下载成功)
            if(request.status >=200 && request.status < 300){
                let string = request.response
                let style = document.createElement('style')
                style.innerHTML = string
                document.head.appendChild(style)
            }else {
                console.log('请求css失败')
            }
        }
    }
    // 4.发送请求
    request.send()
}