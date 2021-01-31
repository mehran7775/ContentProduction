<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param \Throwable $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Throwable $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($request->wantsJson()) {
            if ($exception instanceof ValidationException) {
                return $this->renderValidation($request, $exception);
            }
//            elseif ($exception instanceof AuthenticationException){
//                return $this->renderAuthentication($request,$exception);
//            }
            $this->renderOtherError($exception, $request);
        }
        return parent::render($request, $exception);
    }

    private function renderValidation(\Illuminate\Http\Request $request, ValidationException $exception)
    {
        return response([
            'errors' => $exception->errors()
        ],422);
    }

    private function renderOtherError(Throwable $exception, \Illuminate\Http\Request $request)
    {
        $exception = $this->prepareException($exception);
        $code = method_exists($exception, 'getStatusCode') ? $exception->getStatusCode() : 500;
//            $code = empty($code) ? 500 : $code;
        $message = "خطای داخلی رخ داده است";
        if (!($code = 500) || empty($exception->getMessage())) {
            $message = $exception->getMessage();
        }
        return response([
            'message' => $message,
        ], $code);
    }

}
