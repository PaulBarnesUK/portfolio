const email = 'paul.barnes.psnl@gmail.com'
const subject = 'Portfolio enquiry'

export default {
    email,
    mailto: `mailto:${email}?subject=${encodeURIComponent(subject)}`
}
