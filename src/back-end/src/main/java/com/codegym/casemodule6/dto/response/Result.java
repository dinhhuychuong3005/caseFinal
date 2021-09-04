package com.codegym.casemodule6.dto.response;

public class Result<T>{

    public int status;
    public T objectReturn;
    public String message;

    public Result() {
    }


}
