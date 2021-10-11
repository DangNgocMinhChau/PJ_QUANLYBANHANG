package com.example.quanlybanhang.security.models;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    private String sdt;
    private String matKhauGoc;
    private String ngaySinh;
    private String gioiTinh;
    private String facebook;
    @Column(name = "img", columnDefinition = "LONGTEXT")
    private String img;
    private String fullname;
    private String cmnd;

    @NotBlank
    @Size(max = 120)
    private String password;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles = new HashSet<>();

    public User() {
    }

    public User(
            Long id,
            String username,
            String email,
            String password,
            String sdt,
            String matKhauGoc,
            String ngaySinh,
            String gioiTinh,
            String facebook,
            String img,
            String fullname,
            String cmnd
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.sdt = sdt;
        this.matKhauGoc = matKhauGoc;
        this.ngaySinh = ngaySinh;
        this.gioiTinh = gioiTinh;
        this.facebook = facebook;
        this.img = img;
        this.fullname = fullname;
        this.cmnd = cmnd;
        this.password = password;
    }

    public User(
            String username,
            String email,
            String password,
            String sdt,
            String matKhauGoc,
            String ngaySinh,
            String gioiTinh,
            String facebook,
            String img,
            String fullname,
            String cmnd
    ) {
        this.username = username;
        this.email = email;
        this.sdt = sdt;
        this.matKhauGoc = matKhauGoc;
        this.ngaySinh = ngaySinh;
        this.gioiTinh = gioiTinh;
        this.facebook = facebook;
        this.img = img;
        this.fullname = fullname;
        this.cmnd = cmnd;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getSdt() {
        return sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public String getMatKhauGoc() {
        return matKhauGoc;
    }

    public void setMatKhauGoc(String matKhauGoc) {
        this.matKhauGoc = matKhauGoc;
    }

    public String getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(String ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    public String getGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(String gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public String getFacebook() {
        return facebook;
    }

    public void setFacebook(String facebook) {
        this.facebook = facebook;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getCmnd() {
        return cmnd;
    }

    public void setCmnd(String cmnd) {
        this.cmnd = cmnd;
    }
}
