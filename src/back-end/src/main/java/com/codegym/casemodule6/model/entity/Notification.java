package com.codegym.casemodule6.model.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String content;
    private Date time;
    @ManyToOne
    private User user;



    public Notification() {
    }

    public Notification(Long id, String content, Date time, User user) {
        this.id = id;
        this.content = content;
        this.time = time;
        this.user = user;}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
