import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/Operators';
import { throwError, Subject } from 'rxjs';
import { User } from "./user.model";

export interface AuthReponseData {
    kind: String;
    idToken: String;
    email: String;
    refreshTokent: String;
    expiresIn: String;
    localId: String;
    registered?: Boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new Subject<User>();



    constructor(private http: HttpClient) { }

    signup(email: String, password: String) {
        return this.http.post<AuthReponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3zNoF9MGY4itW0xp7YU7DbPlPRgaZqrU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(response => {
                let expirationDate = new Date().getTime() + +response.expiresIn * 1000;
                this.handleResponse(response.email, response.localId, response.idToken, expirationDate);
            })
        );
    }

    signIn(email: String, password: String) {
        return this.http.post<AuthReponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3zNoF9MGY4itW0xp7YU7DbPlPRgaZqrU',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError),
            tap(response => {
                let expirationDate = new Date().getTime() + +response.expiresIn * 1000;
                this.handleResponse(response.email, response.localId, response.idToken, expirationDate);
            })
        );
    }

    logout(){
        localStorage.setItem('userData', null);
    }

    handleResponse(email: String, id: String, token: String, expirationDate: number) {
        const responseUser = new User(email, id, token, new Date(expirationDate));
        localStorage.setItem('userData', JSON.stringify(responseUser));
    }

    getUserFromLocalStorage() {
        const userData: {
            email: String;
            id: String;
            _token: String;
            _tokenExpirationDate: Date
        } = JSON.parse(localStorage.getItem('userData'));

        if (!userData) {
            return;
        }

        const loadedUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));

        if(loadedUser.token){
            return loadedUser;
        }
        return null;
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'Unknow error.';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        console.log(errorResponse);
        switch (errorResponse.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case "INVALID_PASSWORD":
                errorMessage = 'The password is invalid or the user does not have a password.';
                break;
            case 'USER_DISABLED':
                errorMessage = 'The user account has been disabled by an administrator.';
                break;
            case 'EMAIL_EXISTS':
                errorMessage = 'The email address is already in use by another account.';
                break;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}