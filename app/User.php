<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    const TYPE_USER = 'user';
    const TYPE_MANAGER = 'manager';
    const TYPE_ADMIN = 'admin';

    const TYPES = [self::TYPE_USER,self::TYPE_MANAGER,self::TYPE_ADMIN];

    protected $table = 'users';

    protected $fillable = [
        'name', 'email', 'password', 'api_token', 'type'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function is_user()
    {
        return$this->type = self::TYPE_USER;
    }

    public function is_manager()
    {
        return $this->type = self::TYPE_MANAGER;
    }

    public function is_admin()
    {
        return $this->type = self::TYPE_ADMIN;
    }
    public function generateToken()
    {
       $api_token = str_random(40);
       $this->api_token = $api_token;
       $this->save();
       return $api_token;
    }
}
