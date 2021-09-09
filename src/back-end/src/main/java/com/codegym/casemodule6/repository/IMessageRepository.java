package com.codegym.casemodule6.repository;

import com.codegym.casemodule6.model.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IMessageRepository extends JpaRepository<Message, Long> {

    @Query("select mes from Message mes where mes.sender.id =:id")
    Iterable<Message> findAllBySenderId(Long id);

    @Query("select mes from Message mes where mes.receiver.id =:id")
    Iterable<Message> findAllByReceiverId(Long id);
}
