<?php

namespace App\Http\Controllers;

use App\Http\Requests\users\CreateRequest;
use App\Http\Requests\users\LoginRequest;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function create(CreateRequest $request)
    {
        $data = $request->only(['name', 'password', 'email']);
        $data['password'] = bcrypt($data['password']);
        User::create($data);
        return response('اکانت شما با موفقیت ایجاد شد', 201);
    }

    public function login(LoginRequest $request)
    {

        $user = auth()->attempt([
            'email' => $request->email,
            'password' => $request->password,
        ]);
        if (auth()->check()) {
            return response([
                'token' => auth()->user()->generateToken()
            ]);
        }else{
            return response([
                'massage' => 'اکانتی با این مشخصات یافت نشد',
            ],401);
        }

    }
}
