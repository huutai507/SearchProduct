import styles from '../styles/Program.module.css';

export default function () {
  return (
    <div className={styles.container}>
      <div className='program-item'>
        <iframe
          src='//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=audibleplus&banner=0MG2XKQ7PYPP84NBNFR2&f=ifr&lc=pf4&linkID=d95c859785f4d1ce5480076f073a455f&t=taiphantmt-20&tracking_id=taiphantmt-20'
          width='100%'
          height='320'
          scrolling='no'
          border='0'
          marginWidth='0'
          style={{ border: 'none' }}
          frameBorder='0'
          sandBox='allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'
        ></iframe>
      </div>
      <div className='program-item'>
        <iframe
          src='//rcm-na.amazon-adsystem.com/e/cm?o=1&p=308&l=ur1&category=audiblegiftmemberships&banner=0N7MX06GEHZ8430X4N82&f=ifr&lc=pf4&linkID=f53ac5fa60ddb58af148a04b1531e094&t=taiphantmt-20&tracking_id=taiphantmt-20'
          width='300'
          height='320'
          scrolling='no'
          border='0'
          marginWidth='0'
          style={{ border: 'none' }}
          frameBorder='0'
          sandBox='allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation'
        ></iframe>
      </div>
    </div>
  );
}
