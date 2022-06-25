<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('karyawan', function (Blueprint $table) {
            $table->string('username')->primary();
            $table->string('password');
            $table->string('email');
            $table->string('nik');
            $table->string('nama');
            $table->enum('gender', ['L', 'P']);
            $table->text('alamat');
            $table->string('no_telepon');
            $table->unsignedBigInteger('sub_bagian_id')->nullable();
            $table->unsignedBigInteger('prefer_shift_id')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('sub_bagian_id')->references('id')->on('sub_bagian')->cascadeOnUpdate()->nullOnDelete();
            $table->foreign('prefer_shift_id')->references('id')->on('shift')->cascadeOnUpdate()->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('karyawan');
    }
};
