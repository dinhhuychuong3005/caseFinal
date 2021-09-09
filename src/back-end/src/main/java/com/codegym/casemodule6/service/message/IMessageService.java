package com.codegym.casemodule6.service.message;

import com.codegym.casemodule6.model.entity.Message;
import com.codegym.casemodule6.service.IGeneralService;

public interface IMessageService extends IGeneralService<Message> {
    Iterable<Message> findAllBySenderId(Long id);
    Iterable<Message> findAllByReceiverId(Long id);
}
