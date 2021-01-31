<?php

namespace App\Http\Controllers;

use App\Http\Requests\users\CreateRequest;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function create(CreateRequest $request)
    {
        $data = $request->only(['name' , 'password' , 'email']);
        $data['password'] = bcrypt($data['password']);
        User::create($data);
        return response('اکانت شما با موفقیت ایجاد شد' , 201);
    }
}
