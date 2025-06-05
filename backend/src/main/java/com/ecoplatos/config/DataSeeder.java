package com.ecoplatos.config;

import com.ecoplatos.entity.Product;
import com.ecoplatos.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataSeeder(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Check if the database is empty
        if (productRepository.count() == 0) {
            // Create and save sample products
            Product product1 = new Product();

            product1.setName("Plato Chico");
            product1.setMadeBy("EcoMex");
            product1.setMaterial("Bagazo de caña");
            product1.setMadeIn("Mexico");
            product1.setDescription("Hecho a partir de residuos agrícolas (bagazo), este plato se biodegrada en menos de 90 días, reduciendo la cantidad de residuos sólidos en vertederos.");

            Product product2 = new Product();

            product2.setName("Tenedor ecológico");
            product2.setMadeBy("VerdeClaro");
            product2.setMaterial("Maicena");
            product2.setMadeIn("México");
            product2.setDescription("Fabricado con materiales naturales renovables, este tenedor se descompone sin dejar microplásticos y requiere menos energía para su producción.");

            productRepository.save(product1);
            productRepository.save(product2);

            System.out.println("Sample products created.");
        } else {
            System.out.println("Database already contains products.");
        }
    }
    
}
