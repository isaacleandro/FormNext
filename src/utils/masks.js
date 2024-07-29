
export function masksPhoneNumber(phoneNumber) {

    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,3)} ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(7, 11)}`

    // let resultNumber = ''

    // for (let i = 0; i < phoneNumber.length; i++) {

    //     if (i === 0) {
    //         resultNumber += '(' + phoneNumber[i]
    //         continue
    //     }

    //     if (i === 1) {
    //         resultNumber += phoneNumber[i] + ')'
    //         continue
    //     }

    //     if (i === 6) {
    //         resultNumber += phoneNumber[i] + '-'
    //         continue
    //     }

    //     resultNumber += phoneNumber[i]
    // }

    // return resultNumber
}