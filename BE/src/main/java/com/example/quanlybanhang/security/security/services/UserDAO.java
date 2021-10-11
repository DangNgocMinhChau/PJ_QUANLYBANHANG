package com.example.quanlybanhang.security.security.services;

import com.example.quanlybanhang.security.models.User;
import com.example.quanlybanhang.utils.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;
import java.util.Map;

@Repository
public class UserDAO {
    @Autowired
    private EntityManager entityManager;

    public List<User> getListTaiKhoan(String searchString, Pageable pageable, String sortData) {
        StringBuilder sql = new StringBuilder();
        Object username = null;
        Object email = null;
        Object password = null;
        Object sdt = null;
        Object matKhauGoc = null;
        Object ngaySinh = null;
        Object gioiTinh = null;
        Object facebook = null;
        Object img = null;
        Object fullname = null;
        Object cmnd = null;

        sql.append("select");
        sql.append(" tk");
        sql.append(" from User tk");
        sql.append(" where");
        sql.append(" tk.id is not null ");
     ;

        if(searchString != null & searchString != ""){
            Map<String,String> listSearchParams = Util.splitRequestParamsFromURL(searchString);

            username = listSearchParams.get("username");
            if(username != null && username != ""){
                sql.append(" AND LOWER(tk.username) LIKE :username");
            }

            email = listSearchParams.get("email");
            if(email != null && email != ""){
                sql.append(" AND LOWER(tk.email) LIKE :email");
            }

            password = listSearchParams.get("password");
            if(password != null && password != ""){
                sql.append(" AND LOWER(tk.password) LIKE :password");
            }

            sdt = listSearchParams.get("sdt");
            if(sdt != null && sdt != ""){
                sql.append(" AND LOWER(tk.sdt) LIKE :sdt");
            }

            matKhauGoc = listSearchParams.get("matKhauGoc");
            if(matKhauGoc != null && matKhauGoc != ""){
                sql.append(" AND LOWER(tk.matKhauGoc) LIKE :matKhauGoc");
            }

            ngaySinh = listSearchParams.get("ngaySinh");
            if(ngaySinh != null && ngaySinh != ""){
                sql.append(" AND LOWER(tk.ngaySinh) LIKE :ngaySinh");
            }

            gioiTinh = listSearchParams.get("gioiTinh");
            if(gioiTinh != null && gioiTinh != ""){
                sql.append(" AND LOWER(tk.gioiTinh) LIKE :gioiTinh");
            }

            facebook = listSearchParams.get("facebook");
            if(facebook != null && facebook != ""){
                sql.append(" AND LOWER(tk.facebook) LIKE :facebook");
            }

            img = listSearchParams.get("img");
            if(img != null && img != ""){
                sql.append(" AND LOWER(tk.img) LIKE :img");
            }

            fullname = listSearchParams.get("fullname");
            if(fullname != null && fullname != ""){
                sql.append(" AND LOWER(tk.fullname) LIKE :fullname");
            }

            cmnd = listSearchParams.get("cmnd");
            if(cmnd != null && cmnd != ""){
                sql.append(" AND LOWER(tk.cmnd) LIKE :cmnd");
            }
        }

        if(sortData != null){
            String sortQuery = Util.convertSortDataWithAlias(sortData,"tk");
            sql.append(" ORDER BY " + sortQuery);
        }

        TypedQuery<User> query = entityManager.createQuery(sql.toString(), User.class);
        if(username != null && username !=""){
            query.setParameter("username","%" + username.toString().toLowerCase() + "%");
        }

        if(email != null && email !=""){
            query.setParameter("email","%" + email.toString().toLowerCase() + "%");
        }
        if(password != null && password !=""){
            query.setParameter("password","%" + password.toString().toLowerCase() + "%");
        }

        if(sdt != null && sdt !=""){
            query.setParameter("xacNhanMatKhau","%" + sdt.toString().toLowerCase() + "%");
        }

        if(matKhauGoc != null && matKhauGoc !=""){
            query.setParameter("matKhauGoc","%" + matKhauGoc.toString().toLowerCase() + "%");
        }

        if(ngaySinh != null && ngaySinh !=""){
            query.setParameter("ngaySinh","%" + ngaySinh.toString().toLowerCase() + "%");
        }

        if(gioiTinh != null && gioiTinh !=""){
            query.setParameter("gioiTinh","%" + gioiTinh.toString().toLowerCase() + "%");
        }

        if(facebook != null && facebook !=""){
            query.setParameter("facebook","%" + facebook.toString().toLowerCase() + "%");
        }

        if(img != null && img !=""){
            query.setParameter("img","%" + img.toString().toLowerCase() + "%");
        }

        if(fullname != null && fullname !=""){
            query.setParameter("fullname","%" + fullname.toString().toLowerCase() + "%");
        }

        if(cmnd != null && cmnd !=""){
            query.setParameter("cmnd","%" + cmnd.toString().toLowerCase() + "%");
        }

        if(pageable != null){
            return  query.setFirstResult((int) pageable.getOffset()).setMaxResults(pageable.getPageSize()).getResultList();
        }
        return query.getResultList();
    }

    public Integer countTaiKhoan(String searchString) {
        StringBuilder sql = new StringBuilder();
        Object username = null;
        Object email = null;
        Object password = null;
        Object sdt = null;
        Object matKhauGoc = null;
        Object ngaySinh = null;
        Object gioiTinh = null;
        Object facebook = null;
        Object img = null;
        Object fullname = null;
        Object cmnd = null;

        sql.append("select");
        sql.append(" count(tk)");
        sql.append(" from User tk");

        sql.append(" where");
        sql.append(" tk.id is not null ");

        if(searchString != null & searchString != ""){
            Map<String,String> listSearchParams = Util.splitRequestParamsFromURL(searchString);

            username = listSearchParams.get("username");
            if(username != null && username != ""){
                sql.append(" AND LOWER(tk.username) LIKE :username");
            }

            email = listSearchParams.get("email");
            if(email != null && email != ""){
                sql.append(" AND LOWER(tk.email) LIKE :email");
            }

            password = listSearchParams.get("password");
            if(password != null && password != ""){
                sql.append(" AND LOWER(tk.password) LIKE :password");
            }

            sdt = listSearchParams.get("sdt");
            if(sdt != null && sdt != ""){
                sql.append(" AND LOWER(tk.sdt) LIKE :sdt");
            }

            matKhauGoc = listSearchParams.get("matKhauGoc");
            if(matKhauGoc != null && matKhauGoc != ""){
                sql.append(" AND LOWER(tk.matKhauGoc) LIKE :matKhauGoc");
            }

            ngaySinh = listSearchParams.get("ngaySinh");
            if(ngaySinh != null && ngaySinh != ""){
                sql.append(" AND LOWER(tk.ngaySinh) LIKE :ngaySinh");
            }

            gioiTinh = listSearchParams.get("gioiTinh");
            if(gioiTinh != null && gioiTinh != ""){
                sql.append(" AND LOWER(tk.gioiTinh) LIKE :gioiTinh");
            }

            facebook = listSearchParams.get("facebook");
            if(facebook != null && facebook != ""){
                sql.append(" AND LOWER(tk.facebook) LIKE :facebook");
            }

            img = listSearchParams.get("img");
            if(img != null && img != ""){
                sql.append(" AND LOWER(tk.img) LIKE :img");
            }

            fullname = listSearchParams.get("fullname");
            if(fullname != null && fullname != ""){
                sql.append(" AND LOWER(tk.fullname) LIKE :fullname");
            }

            cmnd = listSearchParams.get("cmnd");
            if(cmnd != null && cmnd != ""){
                sql.append(" AND LOWER(tk.cmnd) LIKE :cmnd");
            }
        }

        TypedQuery<Long> query = entityManager.createQuery(sql.toString(), Long.class);
        if(username != null && username !=""){
            query.setParameter("username","%" + username.toString().toLowerCase() + "%");
        }

        if(email != null && email !=""){
            query.setParameter("email","%" + email.toString().toLowerCase() + "%");
        }
        if(password != null && password !=""){
            query.setParameter("password","%" + password.toString().toLowerCase() + "%");
        }

        if(sdt != null && sdt !=""){
            query.setParameter("xacNhanMatKhau","%" + sdt.toString().toLowerCase() + "%");
        }

        if(matKhauGoc != null && matKhauGoc !=""){
            query.setParameter("matKhauGoc","%" + matKhauGoc.toString().toLowerCase() + "%");
        }

        if(ngaySinh != null && ngaySinh !=""){
            query.setParameter("ngaySinh","%" + ngaySinh.toString().toLowerCase() + "%");
        }

        if(gioiTinh != null && gioiTinh !=""){
            query.setParameter("gioiTinh","%" + gioiTinh.toString().toLowerCase() + "%");
        }

        if(facebook != null && facebook !=""){
            query.setParameter("facebook","%" + facebook.toString().toLowerCase() + "%");
        }

        if(img != null && img !=""){
            query.setParameter("img","%" + img.toString().toLowerCase() + "%");
        }

        if(fullname != null && fullname !=""){
            query.setParameter("fullname","%" + fullname.toString().toLowerCase() + "%");
        }

        if(cmnd != null && cmnd !=""){
            query.setParameter("cmnd","%" + cmnd.toString().toLowerCase() + "%");
        }


        return ((Number) query.getSingleResult()).intValue();
    }

}
