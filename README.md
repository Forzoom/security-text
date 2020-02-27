### Usage

```javascript
securityText('123456', 'head:2') // **3456
securityText('123456', '!head:2') // 12****
securityText('123456', 'tail:2') // 1234**
securityText('123456', '!tail:2') // ****56
securityText('123456', 'head:2|tail:2|head:3') // ***4**
securityText('123456', '!head:2|!tail:2') // ******
```