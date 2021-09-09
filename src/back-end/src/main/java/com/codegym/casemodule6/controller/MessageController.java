package com.codegym.casemodule6.controller;

import com.codegym.casemodule6.model.entity.Message;
import com.codegym.casemodule6.service.message.IMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/messages")
public class MessageController {
    @Autowired
    private IMessageService messageService;

    @PostMapping("")
    public ResponseEntity<Message> create(@RequestBody Message message) {
        Message message1 = new Message();
        message1.setSender(message.getReceiver());
        message1.setReceiver(message.getSender());
        message1.setContent(message.getContent());
        message1.setTime(message.getTime());
        messageService.save(message);
        messageService.save(message1);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/sender/{id}")
    public ResponseEntity<Iterable<Message>> findBySenderId(@PathVariable Long id) {
        Iterable<Message> messages = messageService.findAllBySenderId(id);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }

    @GetMapping("/receiver/{id}")
    public ResponseEntity<Iterable<Message>> findByReceiverId(@PathVariable Long id) {
        Iterable<Message> messages = messageService.findAllByReceiverId(id);
        return new ResponseEntity<>(messages, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Message> deleteById(@PathVariable Long id) {
        messageService.remove(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Message> changeStatus(@PathVariable Long id) {
        Optional<Message> message = messageService.findById(id);
        if (message.get().getStatus() == 0) {
            message.get().setStatus(1);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
