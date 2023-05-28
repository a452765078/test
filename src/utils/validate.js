const validateInput = (inputText) => {
    let msgs = []
    if(inputText === "") {
        msgs.push("输入内容不能为空")
    }
    return msgs
}