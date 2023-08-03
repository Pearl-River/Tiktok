import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9f7935603aa1b0c356c9359c51728ba7~c5_100x100.jpeg?x-expires=1691247600&x-signature=bFL%2FC3DNvsUVx2XBeLmgq7PpTBU%3D"
                    alt=""
                />
                <div>
                    <Button className={cx('follow-btn')} primary>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguyenngocha</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Ngọc Hà</p>
                <p className={cx('analytics')}>
                    <strong className={('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers </span>
                    <strong className={('value')}>28.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
