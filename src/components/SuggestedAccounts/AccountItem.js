import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d6d581eb63640ad08859e36b194b098~c5_100x100.jpeg?x-expires=1691222400&x-signature=VyMvwQJSfExikANHxFl4nt1s%2BJI%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nguyenngocha</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Ngọc Hà</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.prototype = {};

export default AccountItem;
