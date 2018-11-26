import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class AuthService {
    user$: Observable<firebase.User>;

    constructor(private afAuth: AngularFireAuth, private router: Router, private route: ActivatedRoute) {
        this.user$ = this.afAuth.authState;
    }

    login() {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);

        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        this.router.navigate(['/']);
    }
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    }
}
