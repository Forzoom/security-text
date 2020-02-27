export default function securityText(str, rule) {
    const parts = rule.split('|');
    for (let i = 0, len = parts.length; i < len; i++) {
        const part = parts[i];
        const [ key, value ] = part.split(':');
        const reverse = key[0] === '!';
        const pureKey = key[0] === '!' ? key.substr(1) : key;
        const strlen = str.length;

        switch (pureKey) {
            // 从head开始计算
            case 'head':
                const hpos = Number(value);
                str = !reverse ? replace(str, 0, hpos) : replace(str, hpos, strlen);
                break;
            // 从tail开始计算
            case 'tail':
                const tpos = Number(value);
                str = !reverse ? replace(str, strlen - tpos, strlen) : replace(str, 0, strlen - tpos);
                break;
            case 'range':
                const values = value.split(',');
                const from = Number(values[0]);
                const to = Number(values[1]);
                str = replace(str, from, to);
        }
    }
    return str;
}

function repeat(str, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

function replace(str, from, to, content) {
    content = content || repeat('*', to - from);
    return str.substr(0, from) + content + str.substring(to);
}