package com.ecoplatos.repository;

import com.ecoplatos.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // This interface will automatically provide CRUD operations for Product entity
    // Additional custom query methods can be defined here if needed       
}
