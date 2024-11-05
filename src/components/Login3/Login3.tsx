import { memo, useState } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Checkmark_Property1Default } from './Checkmark_Property1Default/Checkmark_Property1Default';
import { EyeOffIcon } from './EyeOffIcon';
import { Frame14Icon } from './Frame14Icon';
import classes from './Login3.module.css';
import { LogoIcon } from './LogoIcon';
import { MmsLogoWideIcon } from './MmsLogoWideIcon';
import { Rectangle5Icon } from './Rectangle5Icon';

interface Props {
  className?: string;
}
/* @figmaId 2001:39791 */
export const Login3: FC<Props> = memo(function Login3(props = {}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.image}></div>
      <div className={classes.loginContainer}>
        <div className={classes.rectangle5}>
          <Rectangle5Icon className={classes.icon} />
        </div>
        <div className={classes.frame22}>
          <div className={classes.loginForm}>
            <div className={classes.email}>
              <div className={classes.emailUsername}>Email/Username</div>
              <div className={classes.frame2}>
                <input 
                  type="text"
                  className={classes.sampleUserEmailCom}
                  placeholder="sample-user@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={classes.password}>
              <div className={classes.password2}>Password</div>
              <div className={classes.frame23}>
                <div className={classes.frame14}>
                  <input 
                    type="password"
                    className={classes.frame14}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={classes.eyeOff}>
                  <EyeOffIcon className={classes.icon3} />
                </div>
              </div>
            </div>
            <div className={classes.extra}>
              <div className={classes.remember}>
                <div className={classes.checkbox}>
                  <input 
                    type="checkbox" 
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
              </div>
              <div className={classes.forgotPassword}>Forgot password?</div>
            </div>
            <div className={classes.frame16}>
              <button 
                className={classes.buttonLogin}
                onClick={() => {/* Add your login logic here */}}
              >
                <div className={classes.login}>Login</div>
              </button>
            </div>
          </div>
          <div className={classes.frame17}>
            <div className={classes.byUsingOurServicesYouAgreeAndA}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>By using our services you agree and accept our </span>
                <span className={classes.label2}>Terms and Conditions</span>
                <span className={classes.label3}> and </span>
                <span className={classes.label4}>Privacy Policy</span>
                <span className={classes.label5}>.</span>
              </p>
            </div>
            <div className={classes._2024Kimaya}>© 2024 · Kimaya</div>
          </div>
        </div>
        <div className={classes.mMSLogoWide}>
          <MmsLogoWideIcon className={classes.icon4} />
        </div>
        <div className={classes.frame27}>
          <div className={classes.welcome}>Welcome 👋</div>
          <div className={classes.signInToGetStarted}>Sign in to get started</div>
        </div>
      </div>
      <div className={classes.briefText}>
        <div className={classes.rectangle15}></div>
        <div className={classes.aOneStopSystemForGettingYourMe}>
          A one-stop system for getting your merchants on board, managing them, and making money.
        </div>
        <div className={classes.enhancingTheCustomerExperience}>Enhancing the Customer Experience</div>
      </div>
    </div>
  );
});
