/**
 * Invitation Data Configuration
 * Update these values to personalize the invitation
 */
import hero1 from '../assets/images/hero6.jpeg'
import heroOpening from '../assets/images/hero1.jpeg';
import hero2 from '../assets/images/hero2.jpeg';
import hero3 from '../assets/images/hero3.jpeg';
import hero4 from '../assets/images/hero4.jpeg'
import hero5 from '../assets/images/hero5.jpeg'
import hero7 from '../assets/images/hero7.jpeg'
import hero8 from '../assets/images/hero8.jpeg'
export const invitationData = {
  babyName: 'Hardik Skandhan',
  babyAge: '1st Birthday',
  parents: {
    father: 'Mr.Porselvan',
    mother: 'Mrs.Indumathi Porselvan',
  },
  quote:
    'Every smile tells a story. Every heartbeat is a blessing. Join us to celebrate our little miracle.',
  event: {
    date: '2026-08-20',
    displayDate: 'Thursday, 20th August 2026',
    time: '18:00',
    displayTime: '6:00 PM onwards',
    venue: 'VK Thirumana Mandapam',
    address: 'Near Thiruvalangadu Railway Station',
    // dressCode: 'Purple & Gold (Optional)',
    mapsUrl: 'https://maps.app.goo.gl/bMCG6yG7Kzu6pKgR6?g_st=aw',
    embedUrl:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1238412695047!2d79.7628105!3d13.091337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52964751487a21%3A0x51d59dafec1cbf8c!2sSRI%20VK%20Thirumana%20Mandapam!5e0!3m2!1sen!2sin!4v1786287631083!5m2!1sen!2sin'
  },
  contact: {
    phone: '7373311558',
    // email: 'sakthik0120@gmail.com',
    whatsapp: '7373311558',
  },
  countdownTarget: '2026-08-20T18:00:00',
  brand: 'Code Craft by Sakthi',
  photos: {
    main: hero1,
    opening:heroOpening,
    gallery: [hero1,heroOpening,hero2,hero3,hero4,hero5,hero7,hero8],
  },
};
