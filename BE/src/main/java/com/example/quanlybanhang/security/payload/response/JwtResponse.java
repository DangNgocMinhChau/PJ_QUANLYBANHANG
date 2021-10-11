package com.example.quanlybanhang.security.payload.response;

import java.util.List;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private Long id;
	private String username;
	private String email;
	private String sdt;
	private String matKhauGoc;
	private String ngaySinh;
	private String gioiTinh;
	private String facebook;
	private String img;
	private String fullname;
	private String cmnd;
	private List<String> roles;

	public JwtResponse(String accessToken,
					   Long id,
					   String username,
					   String email,
					   String sdt,
					   String matKhauGoc,
					   String ngaySinh,
					   String gioiTinh,
					   String facebook,
					   String img,
					   String fullname,
					   String cmnd,
					   List<String> roles) {
		this.token = accessToken;
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
		this.roles = roles;
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSdt() {
		return sdt;
	}

	public void setSdt(String sdt) {
		this.sdt = sdt;
	}

	public void setRoles(List<String> roles) {
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

	public List<String> getRoles() {
		return roles;
	}
}
